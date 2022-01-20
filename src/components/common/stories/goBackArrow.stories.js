import goBackArrow from '../goBackArrow.vue';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default {
  title: 'Common/goBackArrow',
  component: { goBackArrow },
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { goBackArrow },
  template: '<goBackArrow v-bind="$props" :isGiftPage="true">',
  store: new Vuex.Store({
    modules: {
      gift: {
        namespaced: true,
        state: { pageNum: 1 },
      },
    },
  }),
});

export const Default = Template.bind({});
Default.args = {};
