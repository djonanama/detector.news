import Vue from "vue";
import Router from "vue-router";

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
      component: () => import("@/views/Home.vue"),
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
    },
    {
      path: "/post/:id",
      name: "onlypost",
      component: () => import("@/views/OnlyPost.vue"),
      props: true
    },
    {
      path: "/:type/:id",
      name: "posts",
      component: () => import("@/views/Posts.vue"),
      props: true
    },
    {
      path: "/:type/:id/truth/:tid",
      name: "posts_truth",
      component: () => import("@/views/PostsTruth.vue"),
      props: true
    }
  ]
});
