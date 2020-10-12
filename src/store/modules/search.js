import paramQuery from "../env";

export default {
  namespaced: false,
  actions: {
    async fetchSearch({ commit }, search) {
      const res = await fetch(
        paramQuery.URL + "/api/search/" + search,
        paramQuery.p
      );
      const data = await res.json();
      commit("updateSearch", data);
    }
  },

  mutations: {
    updateSearch(state, list) {
      for (var i = 0; i < list.posts.data.post.length; i += 1) {
        list.posts.data.post[i].page = list.posts.data.page[i][0];
      }
      delete list.posts.data["page"];
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
