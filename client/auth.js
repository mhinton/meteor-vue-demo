import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

const authModule = {
  state: {
    user: null,
  },
  mutations: {
    updateUser(state, value) {
      state.user = value;
    },
    isUsernameValid(state, value) {
      state.isUsernameValid = value;
    },
  },
  actions: {
    submitRegisterForm({ commit, state }, formData) {
      Accounts.createUser(formData, error => {
        error ? console.log(error.reason) : console.log("user registered");
      });
    },
    submitLoginForm({ commit, state }, formData) {
      // console.log(`submitLoginForm: ${formData}`);
      Meteor.loginWithPassword(formData.username, formData.password, error => {
        // error ? console.log(error.reason) : console.log("user logged in");
        if (error) {
          console.log(error.reason);
        } else {
          const user = Meteor.user();
          commit("updateUser", user);
        }
      });
    },
    logout({ commit }) {
      Meteor.logout(() => {
        console.log("user logged out");
        commit("updateUser", null);
      });
    },
  },
};

export default authModule;
