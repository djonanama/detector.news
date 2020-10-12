import Vue from "vue";
import Vuex from "vuex";
import navbar from "./modules/navbar";
import human from "./modules/human";
import region from "./modules/region";
import truth from "./modules/truth";
import theme from "./modules/theme";
import search from "./modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navbar: navbar,
    human: human,
    region: region,
    truth: truth,
    theme: theme,
    search: search
  }
});
