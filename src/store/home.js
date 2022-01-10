const state = {
  isSplash: false,
};

const getters = {
  isSplash(state) {
    return state.isSplash;
  },
};

const mutations = {
  isVisited(state, payload) {
    state.isSplash = payload;
  },
};

export default {
  state,
  getters,
  mutations,
};
