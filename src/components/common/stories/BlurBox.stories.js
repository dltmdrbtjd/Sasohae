import BlurBox from '../BlurBox.vue';

export default {
  title: 'Common/BlurBox',
  component: { BlurBox },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BlurBox },
  template: '<BlurBox v-bind="$props">',
});

export const Default = Template.bind({});
Default.args = {
  name: 'BlurBox Story',
};
