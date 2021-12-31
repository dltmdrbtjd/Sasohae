import $http from 'axios';
const state = {
  pageNum: 0,
  giftQuestion: {},
  giftAnswer: {
    giftTarget: '',
    giftEvent: '',
    sex: '',
    age: '',
    giftAnswerExpensive: '',
    giftAnswerPersonality: [],
    giftAnswerEmotional: [],
    giftAnswerTrendy: [],
  },
};

const getters = {
  currentPageNum(state) {
    return state.pageNum;
  },
  giftQuestions(state) {
    return state.giftQuestion || {};
  },
  giftAnswers(state) {
    return state.giftAnswer || {};
  },
};

const mutations = {
  changePageNum(state, pageNum) {
    state.pageNum += pageNum;
  },
  getGiftQuestion(state, question) {
    state.giftQuestion = question;
  },
  addGiftAnswer(state, request) {
    state.giftAnswer[request.key] = request.answer;
  },
};

const actions = {
  async getQuestion({ commit }) {
    try {
      const resp = await $http.get('/gifts');
      const question = resp.data;
      commit('getGiftQuestion', question);
    } catch (e) {
      throw Error(e);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
