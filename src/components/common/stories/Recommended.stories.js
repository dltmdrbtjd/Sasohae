import Recommended from '../Recommended.vue';

export default {
  title: 'Common/Recommended',
  component: { Recommended },
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Recommended },
  template: "<Recommended v-bind='$props' />",
});

export const Default = Template.bind({});
Default.args = {};
