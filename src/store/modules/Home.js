import * as types from "../name/Home";
const state = {
  WelcomeMessage: "Hello world"
};

const getters = {
  WelcomeMessage: state => state.WelcomeMessage
};

const mutations = {
  [types.SET_WELCOME_MESSAGE](STATE, VALUE) {
    STATE.WelcomeMessage = VALUE;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
