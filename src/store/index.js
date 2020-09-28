import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: {
      name: '全国',
      cityId: 0
    },
  },
  mutations: {
    changeCities (state, payload) {
      state.city = payload
    }
  },
  actions: {}
})