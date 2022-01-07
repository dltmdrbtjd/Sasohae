<template>
  <div id="gift-choice-wrapper">
    <DefaultQuestion />
    <div v-if="pageNum === 5" class="question-content">
      <h2>{{ personalQuestion.giftQuestion }}</h2>
      <div class="flexible">
        <span
          class="button"
          @click="
            answer('giftAnswerPersonality', [
              personalQuestion.giftQuestion,
              titleChangeToNumber(title),
            ])
          "
          :title="title"
          v-for="title in yesOrNo"
          :key="title"
        >
          <p>{{ title }}</p>
        </span>
      </div>
      <p>선물을 받으시는분에 대한 질문입니다.</p>
    </div>
    <div v-else-if="pageNum === 6" class="question-content">
      <h2>{{ emotionalQuestion.giftQuestion }}</h2>
      <div class="flexible">
        <span
          class="button"
          @click="
            answer('giftAnswerEmotional', [
              emotionalQuestion.giftQuestion,
              titleChangeToNumber(title),
            ])
          "
          :title="title"
          v-for="title in yesOrNo"
          :key="title"
        >
          <p>{{ title }}</p>
        </span>
      </div>
      <p>선물을 받으시는분에 대한 질문입니다.</p>
    </div>
    <div v-else-if="pageNum === 7" class="question-content">
      <h2>{{ trendyQuestion.giftQuestion }}</h2>
      <div class="flexible">
        <span
          class="button"
          @click="
            answer('giftAnswerTrendy', [
              trendyQuestion.giftQuestion,
              titleChangeToNumber(title),
            ])
          "
          :title="title"
          v-for="title in yesOrNo"
          :key="title"
        >
          <p>{{ title }}</p>
        </span>
      </div>
      <p>선물을 받으시는분에 대한 질문입니다.</p>
    </div>
    <Recommended
      :title="'추천 선물이에요!'"
      v-else-if="pageNum === 8"
      @recommendEvent="recommendCnt"
    >
      <template>
        <div class="recommend-box">
          <img :src="giftPhoto" alt="food" />
          <strong>{{ giftName }}</strong>
          <p>지금까지 {{ giftLikeCnt }}명이 추천했어요!</p>
          <span class="unlike-button" :class="islike" @click="likeGift"></span>
          <span class="shared" @click="sendKaKaoLink"></span>
        </div>
        <button class="refresh" @click="giftRefresh" :disabled="refreshDisable">
          <span />
          <p>다른 추천도 준비했어요!</p>
          <p>{{ giftQuantity }}</p>
        </button>
      </template>
    </Recommended>
  </div>
</template>
<script>
import DefaultQuestion from '@/components/gift/DefaultQuestion.vue';
import GiftMixins from '@/mixins/GiftMixins.vue';
import Recommended from '@/components/common/Recommended.vue';
import Shared from '@/mixins/Shared.vue';
import Question from '@/components/common/Question.vue';
export default {
  components: { DefaultQuestion, Recommended },
  mixins: [GiftMixins, Shared, Question],
  data() {
    return {
      yesOrNo: ['네', '아니오', '잘 모르겠어요.'],
      selectedId: null,
      surveyGifts: [],
      giftQuantitys: 0,
      likes: false,
    };
  },
  computed: {
    islike() {
      if (this.likes) {
        return 'like';
      }
      return '';
    },
    question() {
      return this.$store.getters.giftQuestions;
    },
    pageNum() {
      return this.$store.getters.currentPageNum;
    },
    personalQuestion() {
      return this.randomQuestion(this.question.giftQuestionPersonality);
    },
    emotionalQuestion() {
      return this.randomQuestion(this.question.giftQuestionEmotional);
    },
    trendyQuestion() {
      return this.randomQuestion(this.question.giftQuestionTrendy);
    },
    giftAnswers() {
      return this.$store.getters.giftAnswers;
    },
    giftQuantity() {
      return `${this.surveyGifts.length - 1} / ${this.giftQuantitys}`;
    },
    giftPhoto() {
      return (
        this.surveyGifts && this.surveyGifts[0] && this.surveyGifts[0].giftUrl
      );
    },
    giftLikeCnt() {
      return (
        this.surveyGifts &&
        this.surveyGifts[0] &&
        this.surveyGifts[0].giftLikeCnt
      );
    },
    giftName() {
      return (
        this.surveyGifts && this.surveyGifts[0] && this.surveyGifts[0].giftName
      );
    },
    refreshDisable() {
      if (this.surveyGifts.length === 1) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.$store.dispatch('getQuestion');
  },
  methods: {
    async recommendCnt() {
      try {
        const bodyData = {
          selectedGift: this.surveyGifts[0].giftName,
        };
        await this.$http.put('gifts/recommend', bodyData);
      } catch (e) {
        throw Error(e);
      }
    },
    async likeGift() {
      const selectedGift = {
        selectedGift_id: this.selectedId,
        selectedGift: this.giftName,
      };
      if (this.likes) return;

      await this.$http.put('/gifts/like', selectedGift);
      this.likes = true;
      this.surveyGifts[0].giftLikeCnt += 1;
    },
    randomQuestion(arr) {
      const questionNumber = Math.floor(Math.random() * arr.length);
      const question = arr[questionNumber];
      return question;
    },
    async answer(key, answer) {
      this.$store.commit('changePageNum', 1);
      this.giftAnswer(key, answer);
      if (this.pageNum === 8) {
        await this.answerReuqest();
      }
    },
    async answerReuqest() {
      try {
        const body = this.giftAnswers;
        const resp = await this.$http.post('/gifts', body);
        this.selectedId = resp.data.selectedGift_id;
        this.surveyGifts = resp.data.surveyGifts;
        this.giftQuantitys = resp.data.surveyGifts.length;
      } catch (e) {
        throw Error(e);
      }
    },
    giftRefresh() {
      this.likes = false;
      this.surveyGifts.shift();
    },
    titleChangeToNumber(title) {
      switch (title) {
        case '네':
          return 'T';
        case '아니오':
          return 'F';
        case '잘 모르겠어요.':
          return '*';
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@include questionTitle(135px);
@include recommend();
.question-content {
  width: 100%;
  > .flexible {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > .button {
      width: 100%;
      padding: 16px 0;
      text-align: center;
      border: 1px solid $main-color;
      border-radius: 30px;
      margin-bottom: 20px;
      cursor: pointer;
      color: $main-color;

      &:hover {
        background: {
          color: $main-color;
        }
        color: $white-color;
      }
    }
  }

  > p:last-child {
    font-weight: $font-bold;
    color: $main-color;
    margin-top: 60px;
    text-align: center;
  }
}
</style>
