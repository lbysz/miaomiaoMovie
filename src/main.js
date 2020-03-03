import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/global.less";
// elementui一劳永逸,不需要按需引入
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import axios from "axios";
Vue.prototype.axios = axios;

import Scroller from "./components/Scroller";
Vue.component("Scroller", Scroller);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
