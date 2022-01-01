// import $http from 'axios';

const state = {
  menuSetting: {
    menuType: '',
    menuStyle: '',
    menuWith: '',
  },
};

const getters = {
  menuSet(state) {
    return state.menuSetting;
  },
};

const mutations = {
  choiceMenuType(state, type) {
    state.menuSetting.menuType = type;
  },
  choiceMenuStyle(state, style) {
    state.menuSetting.menuStyle = style;
  },
  choiceMenuWith(state, person) {
    state.menuSetting.menuWith = person;
  },
};

export default {
  state,
  mutations,
  getters,
};
