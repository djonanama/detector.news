import paramQuery from "../env";

function list_to_tree(list) {
  var map = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    list[i].id = list[i].categor_id;
  }

  for (i = 0; i < list.length; i += 1) {
    map[list[i].categor_id] = i;
    list[i].children = [];
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parent_id !== 0) {
      list[map[node.parent_id]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

function delItemRegion(list) {
  var i, j;
  for (i = 0; i < list.length; i += 1) {
    for (j = 0; j < list[i].posts.length; j += 1) {
      var { post_id, geo_locate } = list[i].posts[j];
      list[i].posts = { post_id: post_id, geo_locate: geo_locate };
      list[i].name = list[i]._id.substring(list[i]._id.lastIndexOf("/ ") + 2);
    }
  }
  return list;
}

function lItemPersonMedia(list) {
  var i, j;
  for (i = 0; i < list.length; i += 1) {
    for (j = 0; j < list[i].page.length; j += 1) {
      list[i].name = list[i].page[0].title;
    }
  }
  return list;
}

function setEditIDElement(list, fromid, toid) {
  for (var i = 0; i < list.length; i += 1) {
    list[i][toid] = list[i][fromid];
  }
}

export default {
  namespaced: false,
  actions: {
    async runLoadDataMegaMenu({ dispatch, commit }) {
      await dispatch("fetchCategories");
      await dispatch("fetchTopRegions");
      await dispatch("fetchTopPersonMedia", {
        api: "person",
        itemMenu: "Люди"
      });
      await dispatch("fetchTopPersonMedia", {
        api: "media",
        itemMenu: "Медиа"
      });
    },
    async fetchTopPersonMedia({ commit }, param) {
      const res = await fetch(
        paramQuery.URL + "/api/nav/humantop/" + param.api,
        paramQuery.p
      );
      const person = await res.json();

      const data = lItemPersonMedia(person);

      for (var i = 0; i < data.length; i += 1) {
        data[i].id = data[i]._id;
      }

      const p = {
        item: param.itemMenu,
        data: data
      };
      commit("updateMegaMenuItem", p);
    },
    async fetchTopRegions({ commit }) {
      const res = await fetch(
        paramQuery.URL + "/api/nav/rgiontop",
        paramQuery.p
      );
      const topregion = await res.json();
      const data = delItemRegion(topregion);

      for (var i = 0; i < data.length; i += 1) {
        data[i].id = data[i].posts.geo_locate.value;
      }

      const param = {
        item: "Регион",
        data: data
      };
      commit("updateMegaMenuItem", param);
    },
    async fetchCategories({ commit }) {
      const res = await fetch(
        paramQuery.URL + "/api/nav/category",
        paramQuery.p
      );
      const categories = await res.json();
      const data = list_to_tree(categories);

      const param = {
        item: "Тема",
        data: data
      };
      commit("updateMegaMenuItem", param);
    },
    async fetchPosts({ commit }, id = "") {
      const res = await fetch(
        paramQuery.URL + "/api/posts/" + id,
        paramQuery.p
      );
      const posts = await res.json();

      commit("updateDataPost", posts);
    },
    async fetchStaticPost({ commit }, id) {
      const res = await fetch(paramQuery.URL + "/api/post/" + id, paramQuery.p);
      const data = await res.json();
      commit("updateStaticPost", data);
    }
  },

  mutations: {
    updateMegaMenuItem(state, param) {
      const { item, data } = param;
      state.data.megamenu[item].data = data;
    },
    updateDataPost(state, data) {
      state.data.posts = data;
    },
    updateStaticPost(state, list) {
      let res = list;
      for (var i = 0; i < list.length; i += 1) {
        res[i].page = list[i].page[0];
      }
      state.data.staticpost = list;
    }
  },
  state: {
    data: {
      posts: [],
      staticpost: [],
      megamenu: {
        Регион: {
          type: "region",
          data: []
        },
        Тема: {
          type: "theme",
          data: []
        },
        Люди: {
          type: "human",
          data: []
        },
        Медиа: {
          type: "media",
          data: []
        },
        "Степень истинности": {
          type: "truth",
          data: [
            {
              id: 1,
              name: "Правда"
            },
            {
              id: 2,
              name: "В основном правда"
            },
            {
              id: 3,
              name: "Наполовину правда"
            },
            {
              id: 4,
              name: "В основном ложь"
            },
            {
              id: 5,
              name: "Ложь"
            }
          ]
        }
      }
    }
  },
  getters: {
    getMegaMenuItem(state) {
      return state.data.megamenu;
    },
    getPosts(state) {
      return state.data.posts;
    },
    getStaticPost(state) {
      return state.data.staticpost;
    }
  }
};
