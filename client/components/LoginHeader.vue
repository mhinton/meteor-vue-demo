<template>
  <div>
    <div>Register</div>
    <div>
      <a href="#" @click="displayLogin">Login</a>
      <dialog id="loginDialog">
        <form method="dialog" @submit.prevent="login">
          <p>
            <label>Login: <input type="text" v-model="username" /> </label>
          </p>
          <p>
            <label
              >Password: <input type="password" v-model="password" />
            </label>
          </p>
          <menu>
            <button @click.prevent="cancel">Cancel</button>
            <button type="submit">Submit</button>
          </menu>
        </form>
      </dialog>
    </div>
    <div><a href="#" @click="logout">Logout</a></div>
    <div>
      Current User: <code>{{ user }}</code>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    user() {
      return JSON.stringify(this.$store.state.auth.user);
    }
  },
  methods: {
    displayLogin() {
      this.$el.querySelector("#loginDialog").showModal();
    },
    login() {
      const formData = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("submitLoginForm", formData);
      this.$el.querySelector("#loginDialog").close();
      this.username = null;
      this.password = null;
    },
    cancel() {
      this.$el.querySelector("#loginDialog").close();
      this.username = null;
      this.password = null;
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped></style>
