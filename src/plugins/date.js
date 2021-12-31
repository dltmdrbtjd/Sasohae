import Vue from 'vue';

const todayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  const todayDate = year + '-' + month + '-' + day;
  return todayDate;
};

Vue.use({
  install(Vue) {
    Vue.prototype.$todayDate = todayDate;
  },
});
