import api from "../api.js";

export default {
  namespaced: false,
  actions: {
    async fetchSearch({ commit, state }, str) {
      const data = await api.getSearch("/", str);
      commit("updateSearch", data);
    }
  },
  mutations: {
    updateSearch(state, list) {
      state.data = list;
    }
  },
  state: {
    data: {}
  },
  getters: {
    getSearch(state) {
      return state.data;
    }
  }
};
