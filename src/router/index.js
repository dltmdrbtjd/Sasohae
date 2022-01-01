import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
  },
  {
    path: '/gift',
    name: 'Gift',
    component: () =>
      import(/* webpackChunkName: "gift" */ '@/views/gift/GiftPage.vue'),
  },
  {
    path: '/gift-choice',
    name: 'GiftChoice',
    component: () =>
      import(
        /* webpackChunkName: "gift-choice" */ '@/views/gift/GiftChoicePage.vue'
      ),
  },
  {
    path: '/gift-random',
    name: 'GiftRandom',
    component: () =>
      import(
        /* webpackChunkName: "gift-random" */ '@/views/gift/GiftRandomPage.vue'
      ),
  },
  {
    path: '/gift-ranking',
    name: 'GiftRanking',
    component: () =>
      import(
        /* webpackChunkName: "gift-ranking" */ '@/views/gift/GiftRankingPage.vue'
      ),
  },
  {
    path: '/food',
    name: 'FoodCategory',
    component: () =>
      import(
        /* webpackChunkName: "food-category" */ '@/views/food/FoodCategoryPage.vue'
      ),
  },
  {
    path: '/food-choice',
    name: 'FoodChoice',
    component: () =>
      import(
        /* webpackChunkName: "food-choice" */ '@/views/food/FoodChoicePage.vue'
      ),
  },
  {
    path: '/food-ranking',
    name: 'FoodRanking',
    component: () =>
      import(
        /* webpackChunkName: "food-ranking" */ '@/views/food/FoodRankingPage.vue'
      ),
  },
  {
    path: '/money',
    name: 'MoneyQuestion',
    component: () =>
      import(
        /* webpackChunkName: "money-question" */ '@/views/money/MoneyQuestionPage.vue'
      ),
  },
  {
    path: '/worry',
    name: 'WorryBoard',
    component: () =>
      import(
        /* webpackChunkName: "worry-board" */ '@/views/worry/WorryBoardPage.vue'
      ),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
