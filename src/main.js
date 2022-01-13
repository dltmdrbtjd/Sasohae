import Vue from 'vue';
import App from './App.vue';
import VueKakaoSdk from 'vue-kakao-sdk';
import router from './router';
import store from './store';
import VueGtag from 'vue-gtag';
import './plugins';

const apiKey = process.env.VUE_APP_KAKAO;
const googleTrackingId = process.env.VUE_APP_TRACKING_ID;
Vue.use(
  VueGtag,
  {
    config: {
      id: googleTrackingId,
      params: {
        send_page_view: false,
      },
    },
  },
  router,
);
Vue.use(VueKakaoSdk, { apiKey });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
