import CategoryButton from '../CategoryButton.vue';
import Vuex, { Store } from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Store({
  state: {
    menuSetting: {
      menuType: '',
      menuStyle: '',
      menuWith: '',
    },
    hashTag: {
      type: '',
      style: '',
      with: '',
    },
  },
  getters: {},
});

const mocks = {
  $store: store,
};

describe('CategoryButton Component Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CategoryButton, {
      mocks,
      propsData: {
        category: {
          title: '목적',
          list: [],
        },
      },
    });
  });

  it('categoryValue', () => {
    const mock = '목적';
    wrapper.vm.menuHashTag(mock);
    expect(store.commit).toHaveBeenNthCalledWith('menuType', { tag: '목적' });
  });
});
