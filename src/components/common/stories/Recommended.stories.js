import Recommended from '../Recommended.vue';

export default {
  title: 'Common/Recommended',
  component: { Recommended },
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Recommended },
  template: "<div style='width:390px'><Recommended v-bind='$props' /></div>",
});

export const Default = Template.bind({});
Default.args = {
  title: '오늘 저녁은 이거어때요?'
};
