<template>
  <div class="food-wrapper">
    <div class="food-category" v-if="!recommend">
      <div>
        <strong>당신의 식사를</strong>
        <strong>해시태그 하세요!</strong>
      </div>
      <div class="hash-tag">
        <p v-if="menuHashTag.type">#{{ menuHashTag.type }}</p>
        <p v-if="menuHashTag.style">#{{ menuHashTag.style }}</p>
        <p v-if="menuHashTag.with">#{{ menuHashTag.with }}</p>
      </div>
      <CategoryButton :category="hashTag.purpose" />
      <CategoryButton :category="hashTag.menu" />
      <CategoryButton :category="hashTag.who" />
      <button class="recommend-button" @click="recommended">추천받기</button>
    </div>
    <div v-else-if="recommend">
      <Recommended
        :title="'오늘은 이 메뉴 어때요?'"
        @recommendEvent="menuRecommendCnt"
      >
        <template>
          <div class="recommend-box">
            <img :src="menuPhoto" alt="food" />
            <strong>{{ menuName }}</strong>
            <p>지금까지 {{ menuLikeCnt }}명이 추천했어요!</p>
            <span
              class="unlike-button"
              :class="islike"
              @click="likeFood"
            ></span>
            <span class="shared" @click="sendKaKaoLink"></span>
          </div>
          <button
            class="refresh"
            @click="menuRefresh"
            :disabled="refreshDisable"
          >
            <span />
            <p>다른 추천도 준비했어요!</p>
            <p>{{ menuQuantity }}</p>
          </button>
        </template>
      </Recommended>
    </div>
  </div>
</template>
<script>
import CategoryButton from '@/components/food/CategoryButton.vue';
import Recommended from '@/components/common/Recommended.vue';
import Shared from '@/mixins/Shared.vue';
export default {
  components: { CategoryButton, Recommended },
  mixins: [Shared],
  computed: {
    islike() {
      if (this.likes) {
        return 'like';
      }
      return '';
    },
    menuAnswer() {
      return this.$store.getters.menuSet;
    },
    menuHashTag() {
      return this.$store.getters.Tags;
    },
    menuLikeCnt() {
      return (
        this.surveyMenus &&
        this.surveyMenus[0] &&
        this.surveyMenus[0].menuLikeCnt
      );
    },
    menuName() {
      return (
        this.surveyMenus && this.surveyMenus[0] && this.surveyMenus[0].menuName
      );
    },
    menuPhoto() {
      return (
        this.surveyMenus && this.surveyMenus[0] && this.surveyMenus[0].menuUrl
      );
    },
    menuQuantity() {
      return `${this.surveyMenus.length - 1} / ${this.menuQuantitys}`;
    },
    refreshDisable() {
      if (this.surveyMenus.length === 1) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      recommend: false,
      surveyMenus: [],
      menuQuantitys: 0,
      likes: false,
      hashTag: {
        purpose: {
          list: ['식사', '요리', '간식'],
          title: '목적',
        },
        menu: {
          list: ['전체', '한식', '중식', '일식', '양식', '아시아'],
          title: '종류',
        },
        who: {
          list: ['아무나', '혼밥', '친구', '연인', '가족', '모임'],
          title: '누구랑?',
        },
      },
    };
  },
  methods: {
    async menuRecommendCnt() {
      try {
        const bodyData = {
          menuName: this.menuName,
        };
        await this.$http.put('/menu/recommend', bodyData);
      } catch (e) {
        throw Error(e);
      }
    },
    async recommended() {
      this.$store.commit('menuReset');
      const answer = this.menuAnswer;
      const resp = await this.$http.post('/menu', answer);
      this.surveyMenus = resp.data;
      this.menuQuantitys = resp.data.length;
      this.recommend = true;
    },
    menuRefresh() {
      this.likes = false;
      this.surveyMenus.shift();
    },
    async likeFood() {
      try {
        const menu = {
          menuName: this.menuName,
        };
        if (this.likes) return;
        await this.$http.put('/menu', menu);
        this.likes = true;
        this.surveyMenus[0].menuLikeCnt += 1;
      } catch (e) {
        throw Error(e);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@include recommend();
.food-category {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:first-child {
    position: relative;
    border-bottom: 10px solid #fffdcd;
    margin-bottom: 40px;
    &:after {
      content: '';
      position: absolute;
      transform: rotate(60deg);
      bottom: -15px;
      right: 0;
      width: 18px;
      height: 7px;
      border-radius: 3px;
      background: {
        color: #fffdcd;
      }
      box-shadow: 0.5px 2px 4px rgba(0, 0, 0, 0.3);
    }
    > strong {
      display: block;
      font-size: $font-h1-text;
      font-weight: $font-bold;

      &:first-child {
        margin-bottom: 10px;
      }
    }
  }
}

.hash-tag {
  display: flex;
  width: 80%;
  justify-content: flex-start;
  margin-bottom: 40px;
  p {
    margin-right: 18px;
    font-size: 22px;
    font-weight: $font-medium;

    &:last-child {
      margin: 0;
    }
  }
}

.recommend-button {
  width: 90%;
  padding: 20px;
  border: 1px solid $main-color;
  border-radius: 30px;
  background: {
    color: $main-color;
  }
  color: $white-color;
  cursor: pointer;
}
</style>
