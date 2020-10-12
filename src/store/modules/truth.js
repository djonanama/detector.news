import paramQuery from "../env";

export default {
  namespaced: false,
  actions: {
    async fetchTruthPosts({ commit }, id) {
      const res = await fetch(
        paramQuery.URL + "/api/truth/" + id,
        paramQuery.p
      );
      const data = await res.json();
      commit("updateTruthPosts", data);
    }
  },

  mutations: {
    updateTruthPosts(state, list) {
      for (var i = 0; i < list.length; i += 1) {
        var ch = list[i];
        list[i].page = ch.page[0];
      }
      state.data = list;
    }
  },
  state: {
    data: {}
  },
  getters: {
    getTruthPosts(state) {
      return state.data;
    }
  }
};
