import Vue from 'vue';
import App from './App.vue';
import VueKakaoSdk from 'vue-kakao-sdk';
import router from './router';
import store from './store';
import './plugins';

const apiKey = process.env.VUE_APP_KAKAO;
Vue.use(VueKakaoSdk, { apiKey });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
