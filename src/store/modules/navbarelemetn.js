import api from "../api.js";

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
      const person = await api.getNavBarElement("/nav/humantop/", param.api);
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
      const topregion = await api.getNavBarElement("/nav/rgiontop");
      for (var i = 0; i < topregion.length; i += 1) {
        topregion[i].name = topregion[i].label.substring(
          topregion[i].label.lastIndexOf("/ ") + 2
        );
      }
      const param = {
        item: "Геолокация",
        data: topregion
      };
      commit("updateMegaMenuItem", param);
    },
    async fetchCategories({ commit }) {
      const categories = await api.getNavBarElement("/nav/category");
      const data = list_to_tree(categories);

      const param = {
        item: "Тема",
        data: data
      };
      commit("updateMegaMenuItem", param);
    }
  },

  mutations: {
    updateMegaMenuItem(state, param) {
      const { item, data } = param;
      state.data.megamenu[item].data = data;
    }
  },
  state: {
    data: {
      megamenu: {
        Геолокация: {
          type: "region",
          data: []
        },
        Тема: {
          type: "theme",
          data: []
        },
        Люди: {
          type: "person",
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
    }
  }
};
