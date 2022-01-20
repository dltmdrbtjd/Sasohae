import Question from '../Question.vue';

export default {
  title: 'Common/Question',
  component: { Question },
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Question },
  template: `<div style="width:300px">
              <Question v-bind="$props">
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  questionTitle: '성별은 무엇인가요?',
  subText: '상대분의 성별을 선택해주시면 됩니다.',
};
