import axios from 'axios';
import Vue from 'vue';

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  },
);

Vue.prototype.$http = axios;
