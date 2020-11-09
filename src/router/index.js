import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/region/:id",
      name: "region",
      component: () => import("@/views/nav/Region.vue"),
      props: true
    },
    {
      path: "/theme/:id",
      name: "theme",
      component: () => import("@/views/nav/Theme.vue"),
      props: true
    },
    {
      path: "/human/:id",
      name: "human",
      component: () => import("@/views/nav/Human.vue"),
      props: true
    },
    {
      path: "/media/:id",
      name: "media",
      component: () => import("@/views/nav/Media.vue"),
      props: true
    },
    {
      path: "/truth/:id",
      name: "truth",
      component: () => import("@/views/nav/Truth.vue"),
      props: true
    },
    {
      path: "/post/:id",
      name: "staticpost",
      component: () => import("@/views/StaticPost.vue"),
      props: true
    },
    {
      path: "/search/:find",
      name: "search",
      component: () => import("@/views/Search.vue"),
      props: true
    },
    {
      path: "/donate",
      name: "donate",
      component: () => import("@/views/Donate.vue")
      //meta: { src: require('@/assets/pro.jpg') },
    },
    {
      path: "/factcheck",
      name: "factcheck",
      component: () => import("@/views/Factcheck.vue")
    }
  ]
});
