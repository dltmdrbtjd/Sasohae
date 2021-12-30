<template>
  <div id="worry-board">
    <h2>고민 게시판</h2>
    <button class="write-worry" @click="modalActive">
      내 고민도 적어볼게요.
    </button>
    <div class="board-list">
      <p>나는 이런게 고민이야 정말루!!asdasdasdasdasd</p>
      <p>아 이게 인생인가 ?</p>
      <p>고독하구만...</p>
    </div>
    <BlurBox v-if="isModal" @modaldeactive="modalActive">
      <div class="write-box">
        <textarea class="write-area" name="worry" maxlength="100"></textarea>
        <button class="write-success">고민 다 적었어요.</button>
      </div>
    </BlurBox>
  </div>
</template>
<script>
import BlurBox from '@/components/common/BlurBox.vue';
export default {
  components: { BlurBox },
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    modalActive() {
      if (this.isModal) {
        this.isModal = false;
      } else {
        this.isModal = true;
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
  width: 100%;
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
