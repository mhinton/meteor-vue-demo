<template>
  <div>
    <login-header></login-header>
    <h1>Users</h1>

    <h2>Example Meteor pub/sub</h2>
    <p>These examples show how to use the Meteor Vue integration.</p>
    <p>
      The first example shows the javascript object properties necessary to
      subscribe to a publication and the helper to return the results.
    </p>
    <p>
      The second example shows how to use the MeteorSub and MeteorData
      components to subscribe to a publication and output the results.
    </p>
    <p>
      Both examples show a data loading message until the subscription is ready.
    </p>

    <h3>Example output from meteor.$subscribe</h3>
    <div v-if="!$subReady.userNames">Loading...</div>
    <ul>
      <li v-for="user in users" :key="user._id">{{ user.username }}</li>
    </ul>

    <h3>Example output from MeteorSub/MeteorData components</h3>
    <MeteorSub name="userNames">
      <template slot-scope="{ loading }">
        <div v-if="loading" class="loading">Loading...</div>
        <MeteorData :query="listUsers">
          <template slot-scope="{ data: users }">
            <ul>
              <li v-for="user in users" :key="user._id">{{ user.username }}</li>
            </ul>
          </template>
        </MeteorData>
      </template>
    </MeteorSub>
  </div>
</template>

<script>
import LoginHeader from "../components/LoginHeader";

export default {
  components: {
    LoginHeader,
  },
  meteor: {
    $subscribe: {
      userNames: [],
    },
    users() {
      return Meteor.users.find();
    },
  },
  methods: {
    listUsers() {
      return Meteor.users.find();
    },
  },
};
</script>

<style scoped></style>
