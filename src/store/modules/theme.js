import paramQuery from "../env";

export default {
  namespaced: false,
  actions: {
    async fetchThemePosts({ commit }, id) {
      const res = await fetch(
        paramQuery.URL + "/api/theme/" + id,
        paramQuery.p
      );
      const data = await res.json();
      commit("updateThemePosts", data);
    },
    async fetchCategory({ commit }, id) {
      const res = await fetch(
        paramQuery.URL + "/api/Categories/" + id,
        paramQuery.p
      );

      const categories = await res.json();

      commit("updateCategory", categories);
    }
  },

  mutations: {
    updateThemePosts(state, list) {
      for (var i = 0; i < list.length; i += 1) {
        var ch = list[i];
        list[i].page = ch.page[0];
      }
      state.data.themeposts = list;
    },
    updateCategory(state, param) {
      state.data.categories = param[0];
    }
  },
  state: {
    data: {
      themeposts: [],
      categories: []
    }
  },
  getters: {
    getThemePosts(state) {
      return state.data.themeposts;
    },
    getCategory(state) {
      return state.data.categories;
    }
  }
};
