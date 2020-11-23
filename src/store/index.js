import Vue from "vue";
import Vuex from "vuex";
import navbar from "./modules/navbarelemetn";
import mainpage from "./modules/mainpage";
import typepost from "./modules/typepost";
import search from "./modules/search";
import onlypost from "./modules/onlypost";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navbar: navbar,
    mainpage: mainpage,
    typepost: typepost,
    search: search,
    onlypost: onlypost
  }
});
