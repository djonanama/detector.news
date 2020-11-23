import api from "../api.js";

export default {
  namespaced: false,
  actions: {
    async fetchType({ commit, state }, type) {
      commit("updateType", type);
    },
    async fetchPostsTruth({ commit, state }, param) {
      // console.log([state.thisType, param]);
      const data = await api.getPosts(
        `/${param.type}/${param.id}/truth/${param.tid}`,
        state[state.thisType].param
      );
      state[state.thisType].param.p += 1;
      commit("updatePosts", data);
      commit("updatePostsisadd", data.data.length);
    },
    async fetchPosts({ commit, state }, id) {
      const data = await api.getPosts(
        "/" + state.thisType + "/" + id,
        state[state.thisType].param
      );
      state[state.thisType].param.p += 1;
      commit("updatePosts", data);
      commit("updatePostsisadd", data.data.length);
    }
  },
  mutations: {
    updatePosts(state, d) {
      if (d.data.length == 0) {
        state[state.thisType].isadd = false;
      } else {
        state[state.thisType].isadd = true;
        state[state.thisType].mp.truth =
          "truth" in d && d.truth.length > 1
            ? d.truth
            : state[state.thisType].mp.truth;
      }
      for (let index = 0; index < d.data.length; index++) {
        let exi = state[state.thisType].mp.data
          .map(function(e) {
            return e.post_id;
          })
          .indexOf(d.data[index].post_id);

        if (exi == -1) state[state.thisType].mp.data.push(d.data[index]);
      }
    },
    updatePostsisadd(state, cnt) {
      if (state[state.thisType].param.l > cnt) {
        state[state.thisType].isadd = false;
      }
    },
    updateType(state, str) {
      state.thisType = str;
      state[str] = {
        mp: { data: [], truth: [] },
        isadd: true,
        param: { p: 0, l: 2 }
      };
    }
  },
  state: {
    thisType: "main",
    region: { mp: { data: [], truth: [] }, isadd: true, param: { p: 0, l: 2 } },
    theme: { mp: { data: [], truth: [] }, isadd: true, param: { p: 0, l: 2 } },
    person: { mp: { data: [], truth: [] }, isadd: true, param: { p: 0, l: 2 } },
    media: { mp: { data: [], truth: [] }, isadd: true, param: { p: 0, l: 2 } },
    truth: { mp: { data: [], truth: [] }, isadd: true, param: { p: 0, l: 2 } },
    tag: { mp: { data: [], truth: [] }, isadd: true, param: { p: 0, l: 2 } },
    author: { mp: { data: [], truth: [] }, isadd: true, param: { p: 0, l: 2 } },
    main: { mp: { data: [], truth: [] }, isadd: true, param: { p: 0, l: 2 } }
  },
  getters: {
    getPosts(state) {
      return state[state.thisType].mp;
    },
    getIsAddPosts(state) {
      return state[state.thisType].isadd;
    }
  }
};
