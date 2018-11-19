import Vue from "vue";
import Vuex from "vuex";
import authModule from "./auth";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth: authModule,
  },
  state: {
    // users: [],
  },
  mutations: {
    // updateUsers(state, value) {
    //   console.log("users state mutated");
    //   state.users = value;
    // },
  },
});

export default store;
