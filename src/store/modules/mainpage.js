import api from "../api.js";

export default {
  namespaced: false,
  actions: {
    async fetchMainPosts({ commit, state }) {
      //   console.log(param);

      const data = await api.getPosts("", state.param);
      state.param.p += 1;
      commit("updateMainPosts", data);
      commit("updateMainPostsisadd", data.data.length);
    }
  },
  mutations: {
    updateMainPosts(state, d) {
      if (d.data.length == 0) {
        state.isadd = false;
      } else {
        state.isadd = true;
        state.mp.truth = d.truth.length > 1 ? d.truth : state.mp.truth;

        for (let index = 0; index < d.data.length; index++) {
          let exi = state.mp.data
            .map(function(e) {
              return e.post_id;
            })
            .indexOf(d.data[index].post_id);

          if (exi == -1) state.mp.data.push(d.data[index]);
        }
      }
    },
    updateMainPostsisadd(state, cnt) {
      if (state.param.l > cnt) {
        state.isadd = false;
      }
    }
  },
  state: {
    mp: { data: [], truth: [] },
    isadd: true,
    param: { p: 0, l: 2 }
  },
  getters: {
    getMainPosts(state) {
      return state.mp;
    },
    getIsAdd(state) {
      return state.isadd;
    }
  }
};
