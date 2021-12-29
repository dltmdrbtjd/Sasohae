const state = {
  pageNum: 0,
};

const getters = {
  currentPageNum(state) {
    return state.pageNum;
  },
};

const mutations = {
  changePageNum(state, pageNum) {
    state.pageNum += pageNum;
  },
};

export default {
  state,
  getters,
  mutations,
};
