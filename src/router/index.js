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
      import(/* webpackChunkName: "gift" */ '@/views/GiftPage.vue'),
  },
  {
    path: '/gift-choice',
    name: 'GiftChoice',
    component: () =>
      import(
        /* webpackChunkName: "gift-choice" */ '@/views/GiftChoicePage.vue'
      ),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
