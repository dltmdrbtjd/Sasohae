import CategoryButton from '../CategoryButton.vue';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CategoryButton Component Testing', () => {
  const wrapper = shallowMount(CategoryButton, {
    propsData: {
      category: {
        title: '목적',
        list: [],
      },
    },
  });
  it('categoryValue', async () => {
    await wrapper.vm.menuHashTag('테스트1');
    expect(store.state.food.hashTag.type).toEqual('테스트1');
  });
});
