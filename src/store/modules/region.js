import paramQuery from "../env";

export default {
  namespaced: false,
  actions: {
    async fetchRegionPosts({ commit }, id) {
      const res = await fetch(
        paramQuery.URL + "/api/region/" + id,
        paramQuery.p
      );
      const data = await res.json();
      commit("updateRegionPosts", data);
    }
  },

  mutations: {
    updateRegionPosts(state, list) {
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
    getRegionPosts(state) {
      return state.data;
    }
  }
};
