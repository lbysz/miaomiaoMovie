import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import login from "../views/login/login.vue";
import home from "../views/home/home.vue";

Vue.use(VueRouter);

const routes = [
  // { path: "/", name: "home", component: Home },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/About.vue")
  // }
  { path: "/", redirect: "/login" },
  { path: "/login", name: "登录页", component: login },
  { path: "/home", name: "首页", component: home }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
