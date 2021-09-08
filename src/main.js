import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import { routes } from "./routes.js";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  el: "#app",
  router: router,
  vuetify,
  render: (h) => h(App),
});
