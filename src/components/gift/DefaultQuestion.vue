<template>
  <div class="default-question-wrapper">
    <div v-if="pageNum === 0">
      <h2>{{ questions[pageNum].question }}</h2>
      <div class="flexible">
        <ChoiceList
          :title="title"
          v-for="title in questions[pageNum].list"
          :key="title"
        />
      </div>
    </div>
    <div v-else-if="pageNum === 1">
      <h2>{{ questions[pageNum].question }}</h2>
      <div class="flexible">
        <ChoiceList
          :title="title"
          v-for="title in questions[pageNum].list"
          :key="title"
        />
      </div>
    </div>
    <div v-else-if="pageNum === 2">
      <h2>{{ questions[pageNum].question }}</h2>
      <div class="flexible">
        <OXButton
          :title="title"
          v-for="title in questions[pageNum].list"
          :key="title"
        />
      </div>
    </div>
    <div v-else-if="pageNum === 3">
      <h2>{{ questions[pageNum].question }}</h2>
      <div class="flexible">
        <ChoiceList
          :title="title"
          v-for="title in questions[pageNum].list"
          :key="title"
        />
      </div>
    </div>
    <div v-else-if="pageNum === 4">
      <h2>{{ questions[pageNum].question }}</h2>
      <div class="flexible">
        <OXButton
          :title="title"
          v-for="title in questions[pageNum].list"
          :key="title"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ChoiceList from '@/components/gift/ChoiceList.vue';
import OXButton from '@/components/common/OXButton.vue';
import { mapGetters } from 'vuex';
export default {
  components: { ChoiceList, OXButton },
  data() {
    return {
      questions: [
        {
          question: '누구에게 선물하나요?',
          list: [
            '부모님',
            '친구',
            '연인',
            '선생님',
            '교수님',
            '직장동료',
            '선후배',
            '구연인',
            '기타',
          ],
        },
        {
          question: '어떤 목적의 선물인가요?',
          list: [
            '생일',
            '연인기념일',
            '결혼기념일',
            '합격',
            '입학',
            '졸업',
            '집들이',
            '명절',
            '하찮은 선물',
          ],
        },
        {
          question: '성별을 선택해주세요.',
          list: ['남자', '여자'],
        },
        {
          question: '연령대를 선택해주세요.',
          list: ['20대', '30대', '40대', '50대', '60대', '그 외'],
        },
        {
          question: '지갑이 여유로우 신가요?',
          list: ['예', '아니오', '잘 모르겠어요.'],
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['currentPageNum']),
    pageNum() {
      return this.currentPageNum;
    },
  },
  methods: {
    IncreasePageNum() {
      this.$store.commit('changePageNum', 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.default-question-wrapper {
  width: 100%;

  > div > .flexible {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

h2 {
  text-align: center;
  margin-bottom: 135px;
  font-size: $font-h1-text;
  font-weight: $font-bold;
  border-bottom: 10px solid #fffdcd;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    transform: rotate(30deg);
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
}
</style>
