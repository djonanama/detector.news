import api from "../api.js";

export default {
  namespaced: false,
  actions: {
    async fetchOnlyPost({ commit, state }, id) {
      const data = await api.getOnlyPost(id);
      commit("updateOnlyPost", data);
    }
  },
  mutations: {
    updateOnlyPost(state, d) {
      state.data = d;
    }
  },
  state: {
    data: {}
  },
  getters: {
    getOnlyPost(state) {
      return state.data;
    }
  }
};
