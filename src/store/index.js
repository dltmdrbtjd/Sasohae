import Vue from 'vue';
import Vuex from 'vuex';
// modules
import home from '@/store/home.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { home },
});
