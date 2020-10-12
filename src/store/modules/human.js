import paramQuery from "../env";

export default {
  namespaced: false,
  actions: {
    async fetchHumanPosts({ commit }, id) {
      const res = await fetch(
        paramQuery.URL + "/api/human/" + id,
        paramQuery.p
      );
      const data = await res.json();
      commit("updateHumanPosts", data);
    }
  },

  mutations: {
    updateHumanPosts(state, list) {
      for (var i = 0; i < list.length; i += 1) {
        var ch = list[i];
        list[i] = list[i].post;
        list[i].page = ch.page[0];
      }
      state.data = list;
    }
  },
  state: {
    data: {}
  },
  getters: {
    getHumanPosts(state) {
      return state.data;
    }
  }
};
