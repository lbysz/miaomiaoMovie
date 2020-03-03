import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import login from "../views/login/login.vue";
import home from "../views/home/home.vue";
import Cinema from "../views/Cinema/index.vue";
import Mine from "../views/Mine/index.vue";
import Movie from "../views/Movie/index.vue";

import NowPlaying from "../components/NowPlaying/index.vue";
import City from "../components/City/index.vue";
import CommingSoon from "../components/CommingSoon/index.vue";
import Search from "../components/Search/index.vue";

import axios from "axios";
Vue.prototype.axios = axios;

import Loading from "../components/Loading/index.vue";
Vue.component("Loading", Loading);

import Scroller from "../components/Scroller";
Vue.component("Scroller", Scroller);

Vue.filter("setWH", (url, arg) => {
  return url.replace(/w\.h/, arg);
});

Vue.use(VueRouter);

const routes = [
  // { path: "/", name: "home", component: Home },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/About.vue")
  // }
  { path: "/", redirect: "/movie/nowPlaying" },
  { path: "/login", name: "登录页", component: login },
  { path: "/home", name: "首页", component: home },
  {
    path: "/movie",
    name: "电影",
    component: Movie,
    children: [
      { path: "nowPlaying", name: "正在热映", component: NowPlaying },
      { path: "commingsoon", name: "即将上映", component: CommingSoon },
      { path: "search", name: "搜索", component: Search },
      { path: "city", name: "城市", component: City }, //二级路由
      { path: "/movie", redirect: "/movie/nowPlaying" }
    ]
  },
  { path: "/cinema", name: "电影院", component: Cinema },
  { path: "/mine", name: "我的", component: Mine },
  { path: "/*", redirect: "/movie" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
