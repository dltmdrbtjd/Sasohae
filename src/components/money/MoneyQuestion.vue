<template>
  <div>
    <div v-if="!lastQuestion">
      <h2>{{ question.moneyQuestion }}</h2>
      <div>
        <button @click="questionAnswer(1)">네</button>
        <button @click="questionAnswer(2)">아니오.</button>
      </div>
    </div>
    <Recommended :title="'축의금은 이만큼 내세요!'" v-if="lastQuestion">
      <template>
        <div class="recommend-box">
          <img src="@/assets/congratulations_money.png" alt="food" />
          <strong>{{ recommendMoneyCnt }} 만원</strong>
          <p v-if="isZeroMoney">봉투만 전해주세요!!</p>
          <span @click="sendKaKaoLink" class="shared"></span>
        </div>
      </template>
    </Recommended>
  </div>
</template>
<script>
import Recommended from '@/components/common/Recommended.vue';
import Shared from '@/mixins/Shared.vue';
export default {
  components: { Recommended },
  mixins: [Shared],
  data() {
    return {
      question: {
        moneyQuestion_id: null,
        moneyQuestion: '',
        negativeAnswerQuestion: '',
        positiveAnswerQuestion: '',
        positiveChangeValue: null,
      },
      recommendMoneyCnt: 5,
      lastQuestion: false,
    };
  },
  computed: {
    isZeroMoney() {
      if (this.recommendMoneyCnt <= 1) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.getMoneyQuestion();
  },
  methods: {
    async getMoneyQuestion() {
      try {
        const resp = await this.$http.get('/money');
        const firstQuestion = resp.data;
        this.question = firstQuestion;
      } catch (e) {
        throw Error(e);
      }
    },
    async questionAnswer(answer) {
      if (answer === 1 && this.question.positiveAnswerQuestion !== 'X') {
        answer = 'O';
        this.recommendMoneyCnt += this.question.positiveChangeValue;
      } else if (answer === 2 && this.question.negativeAnswerQuestion !== 'X')
        answer = 'X';
      else {
        if (answer === 1) {
          this.recommendMoneyCnt += this.question.positiveChangeValue;
        }
        this.moneyRecommendCnt();
        this.lastQuestion = true;
      }
      try {
        let answers = {
          moneyQuestion_id: this.question.moneyQuestion_id,
          answer,
        };
        const resp = await this.$http.post('/money', answers);
        const nextQuestion = resp.data;
        if (this.recommendMoneyCnt <= 0) {
          this.recommendMoneyCnt = 0;
        }
        this.question = nextQuestion;
      } catch (e) {
        throw Error(e);
      }
    },
    async moneyRecommendCnt() {
      try {
        await this.$http.put('money');
      } catch (e) {
        throw Error(e);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@include questionTitle(135px);
@include recommend();
div {
  width: 100%;
}

h2 {
  line-height: 2rem;
}

button {
  width: 100%;
  padding: 16px 0;
  text-align: center;
  border: 1px solid $main-color;
  border-radius: 30px;
  margin-bottom: 20px;
  background: {
    color: rgba(0, 0, 0, 0);
  }
  color: $main-color;
  cursor: pointer;

  &:hover {
    background: {
      color: $main-color;
    }
    color: $white-color;
  }
}
</style>
