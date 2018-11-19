import { Meteor } from "meteor/meteor";
import Vue from "vue";
import VueMeteorTracker from "vue-meteor-tracker";
import App from "./app.vue";
import routerFactory from "./routes";
import store from "./store";
import "../lib/collections";
import "../lib/methods";

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  const router = routerFactory.create();

  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount("app");
});
