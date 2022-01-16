import RankingComponent from '../Ranking.vue';
import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import FoodRankingPage from '@/views/food/FoodRankingPage';
import GiftRankingPage from '@/views/gift/GiftRankingPage';

const { localVue, router } = setupLocalVueWithRouter();

function setupLocalVueWithRouter() {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter({
    routes: [
      {
        path: '/gift-ranking',
        name: 'GiftRanking',
        component: GiftRankingPage,
      },
      {
        path: '/food-ranking',
        name: 'FoodRanking',
        component: FoodRankingPage,
      },
    ],
  });

  return { localVue, router };
}

describe('RankingComponent', () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = mount(RankingComponent, {
    localVue,
    router,
    propsData: {
      ranking: [],
    },
    global: {
      mocks: {
        $route: {
          path: '/gift-ranking',
        },
        $router: mockRouter,
      },
    },
  });

  it('it sholud isModal value true', () => {
    const mockData = {
      imgUrl: '/',
      rank: '1',
      variance: '1',
      hello: '1',
      likeCnt: '1',
    };
    expect(wrapper.vm.isModal).toBeFalsy();
    wrapper.vm.modalActive(mockData);
    expect(wrapper.vm.isModal).toBeTruthy();
  });
});
