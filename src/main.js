import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mdbvue from "mdbvue";
import moment from "vue-moment";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  moment,
  mdbvue,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
