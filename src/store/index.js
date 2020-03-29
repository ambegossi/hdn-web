import Vue from 'vue';
import Vuex from 'vuex';

import api from '../services/api';
import User from '../models/UserClass';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    user: {},
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = new User(payload);
    },
  },
  actions: {
    getUser(context, payload) {
      api.get(`/user/${payload}`).then((response) => {
        context.commit('UPDATE_USER', response.data[0]);
        context.commit('UPDATE_LOGIN', true);
      });
    },
  },
  modules: {},
});
