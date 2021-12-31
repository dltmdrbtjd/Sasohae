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
              title,
            ])
          "
          :title="title"
          v-for="title in yesOrNo"
          :key="title"
        >
          <p>{{ title }}</p>
        </span>
      </div>
    </div>
    <div v-else-if="pageNum === 6" class="question-content">
      <h2>{{ emotionalQuestion.giftQuestion }}</h2>
      <div class="flexible">
        <span
          class="button"
          @click="
            answer('giftAnswerEmotional', [
              emotionalQuestion.giftQuestion,
              title,
            ])
          "
          :title="title"
          v-for="title in yesOrNo"
          :key="title"
        >
          <p>{{ title }}</p>
        </span>
      </div>
    </div>
    <div v-else-if="pageNum === 7" class="question-content">
      <h2>{{ trendyQuestion.giftQuestion }}</h2>
      <div class="flexible">
        <span
          class="button"
          @click="
            answer('giftAnswerTrendy', [trendyQuestion.giftQuestion, title])
          "
          :title="title"
          v-for="title in yesOrNo"
          :key="title"
        >
          <p>{{ title }}</p>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultQuestion from '@/components/gift/DefaultQuestion.vue';
import GiftMixins from '@/mixins/GiftMixins.vue';
export default {
  components: { DefaultQuestion },
  mixins: [GiftMixins],
  data() {
    return {
      yesOrNo: ['네', '아니오', '잘 모르겠어요.'],
    };
  },
  computed: {
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
  },
  mounted() {
    this.$store.dispatch('getQuestion');
  },
  methods: {
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
        console.log(resp.data);
      } catch (e) {
        throw Error(e);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@include questionTitle(135px);
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
}
</style>
