<template>
  <div class="default-question-wrapper">
    <Question v-if="pageNum === 0" :questionTitle="defaultQuestion">
      <ChoiceList
        :title="title"
        v-for="title in questions[pageNum].list"
        :key="title"
        @click.native="giftAnswer('giftTarget', titleChangeToNumber(title))"
      />
    </Question>
    <Question v-if="pageNum === 1" :questionTitle="defaultQuestion">
      <ChoiceList
        :title="title"
        v-for="title in questions[pageNum].list"
        :key="title"
        @click.native="giftAnswer('giftEvent', titleChangeToNumber(title))"
      />
    </Question>
    <Question
      v-if="pageNum === 2"
      :questionTitle="defaultQuestion"
      :subText="'상대분의 성별을 선택해주시면 됩니다.'"
    >
      <OXButton
        :title="title"
        v-for="title in questions[pageNum].list"
        :key="title"
        @click.native="giftAnswer('sex', titleChangeToNumber(title))"
      />
    </Question>
    <Question
      v-if="pageNum === 3"
      :questionTitle="defaultQuestion"
      :subText="'상대분의 나이를 선택해주시면 됩니다.'"
    >
      <ChoiceList
        :title="title"
        v-for="title in questions[pageNum].list"
        :key="title"
        @click.native="giftAnswer('age', ageChangeToNumber(title))"
      />
    </Question>
    <Question v-if="pageNum === 4" :questionTitle="defaultQuestion">
      <OXButton
        :title="title"
        v-for="title in questions[pageNum].list"
        :key="title"
        @click.native="giftAnswer('giftAnswerExpensive', title)"
      />
    </Question>
  </div>
</template>
<script>
import ChoiceList from '@/components/gift/ChoiceList.vue';
import OXButton from '@/components/gift/OXButton.vue';
import GiftMixins from '@/mixins/GiftMixins.vue';
import Question from '@/components/common/Question.vue';
import { mapGetters } from 'vuex';
export default {
  components: { ChoiceList, OXButton, Question },
  mixins: [GiftMixins],
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
          question: '지갑이 여유로우신가요?',
          list: ['네', '아니오', '잘 모르겠어요.'],
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['currentPageNum']),
    pageNum() {
      return this.currentPageNum;
    },
    defaultQuestion() {
      return this.questions[this.pageNum].question;
    },
  },
  methods: {
    titleChangeToNumber(title) {
      if (title === '남자') {
        return 'M';
      } else if (title === '여자') {
        return 'W';
      }
      const num = this.questions[this.pageNum - 1].list.findIndex(
        (i) => i === title,
      );
      return String(num + 1);
    },
    ageChangeToNumber(title) {
      if (title !== '그 외') {
        const age = title.split('대')[0];
        return age;
      }
      return title;
    },
  },
};
</script>
<style lang="scss" scoped>
@include questionTitle(135px);
.default-question-wrapper {
  width: 100%;
}
</style>
