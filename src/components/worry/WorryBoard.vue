<template>
  <div id="worry-board">
    <h2>고민 게시판</h2>
    <button class="write-worry" @click="modalActive">
      내 고민도 적어볼게요.
    </button>
    <div class="board-list">
      <p v-for="comment in comments" :key="comment.comment">
        {{ comment.comment }}
      </p>
      <InfiniteLoading @infinite="infiniteHandler" spinner="waveDots">
        <div slot="no-more" style="color: rgb(255, 255, 255)">
          마지막 게시물 이에요 :)
        </div>
      </InfiniteLoading>
    </div>
    <BlurBox v-if="isModal" @modaldeactive="modalActive">
      <div class="write-box">
        <textarea
          class="write-area"
          name="worry"
          maxlength="100"
          v-model="userComment"
          placeholder="여러분의 고민을 작성해보세요 :)"
        ></textarea>
        <button class="write-success" @click="addComment()">
          고민 다 적었어요.
        </button>
      </div>
    </BlurBox>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import BlurBox from '@/components/common/BlurBox.vue';
export default {
  components: { BlurBox, InfiniteLoading },
  data() {
    return {
      isModal: false,
      pageNum: 0,
      comments: [],
      isVisit: false,
      userComment: '',
    };
  },
  mounted() {
    this.visited();
    this.worryVisitedCnt();
  },
  computed: {
    visitedCheck() {
      if (this.isVisit) {
        return `/comments?commentIdx=${this.pageNum}&visited=${this.isVisit}`;
      }
      return `/comments?commentIdx=${this.pageNum}`;
    },
  },
  methods: {
    modalActive() {
      if (this.isModal) {
        this.isModal = false;
      } else {
        this.isModal = true;
      }
    },
    async addComment() {
      try {
        const commentData = {
          comment: this.userComment,
        };
        await this.$http.post('/comments', commentData);
        this.comments.unshift(this.userComment);
        this.isModal = false;
        location.reload();
      } catch (e) {
        const errorMessage = e.response.data.errorMessage;
        window.alert(errorMessage);
        throw Error(e);
      }
    },
    async visited() {
      const visitDate = localStorage.getItem('comments_VisitDate');
      if (visitDate !== this.$todayDate() || !visitDate) {
        localStorage.setItem('comments_VisitDate', this.$todayDate());
        this.isVisit = 'up';
      }
    },
    async worryVisitedCnt() {
      try {
        if (this.isVisit === 'up') {
          this.$http.put('/comments');
        }
      } catch (e) {
        throw Error(e);
      }
    },
    async infiniteHandler($state) {
      try {
        const { data } = await this.$http.get(this.visitedCheck);
        const arrChecked = data.length > 1 ? true : false;
        if (arrChecked) {
          setTimeout(() => {
            this.pageNum += data.length;
            this.comments.push(...data);
            $state.loaded();
          }, 500);
        } else {
          $state.complete();
        }
      } catch (e) {
        throw Error(e);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@include questionTitle(36px);
#worry-board {
  width: 100%;
}
.write-worry {
  width: 235px;
  padding: 17px 0;
  margin-bottom: 36px;
  border: 1px solid $main-color;
  border-radius: 30px;
  display: flex;
  cursor: pointer;
  background: {
    color: rgba(0, 0, 0, 0);
  }
  color: $main-color;
  justify-content: center;
  align-items: center;
  &:hover {
    background: {
      color: $main-color;
    }
    color: $white-color;
  }
}
.board-list {
  width: 100%;
  height: 60%;
  background: {
    color: $main-color;
  }
  overflow: auto;
  border: 8px solid $hard-brown-color;
  border-radius: 10px;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;

  > p {
    margin-bottom: 19px;
    color: $white-color;
  }
}
.write-box {
  width: 80%;
  height: 511px;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 8px solid $hard-brown-color;
  border-radius: 10px;
  background: {
    color: $main-color;
  }
}
.write-area {
  resize: none;
  border: none;
  width: 90%;
  height: 300px;
  padding: 16px;
  color: $white-color;
  background: {
    color: rgba(0, 0, 0, 0);
  }

  &:focus {
    outline: none;
  }
}

.write-success {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16.5px 0;
  width: 235px;
  border: 1px solid $white-color;
  border-radius: 27px;
  background: {
    color: rgba(0, 0, 0, 0);
  }
  color: $white-color;
  cursor: pointer;

  &:hover {
    background: {
      color: $white-color;
    }
    color: $main-color;
  }
}
</style>
