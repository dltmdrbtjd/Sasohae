// import $http from 'axios';

const state = {
  menuSetting: {
    menuType: '',
    menuStyle: '',
    menuWith: '',
  },
  hashTag: {
    type: '',
    style: '',
    with: '',
  },
};

const getters = {
  menuSet(state) {
    return state.menuSetting;
  },
  Tags(state) {
    return state.hashTag;
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
  menuType(state, type) {
    state.hashTag.type = type;
  },
  menuStyle(state, style) {
    state.hashTag.style = style;
  },
  menuWith(state, person) {
    state.hashTag.with = person;
  },
  menuReset(state) {
    state.menuSetting.menuType = '';
    state.menuSetting.menuStyle = '';
    state.menuSetting.menuWith = '';
    state.hashTag.type = '';
    state.hashTag.with = '';
    state.hashTag.style = '';
  },
};

const actions = {};

export default {
  state,
  mutations,
  getters,
  actions,
};
