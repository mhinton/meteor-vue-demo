<template>
  <div>
    <h1>{{ greeting }}</h1>

    <button @click="count();">Click Me!</button>

    <p>You've clicked: {{ clicksCount }} times.</p>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import { Clicks } from "../../lib/collections";

export default {
  meteor: {
    $subscribe: {
      clicks: []
    },
    clicksCount() {
      const clicks = Clicks.findOne();
      if (clicks) {
        return clicks.count;
      }
      return 0;
    }
  },
  data() {
    return {
      greeting: "Hello Meteor Vue"
    };
  },
  methods: {
    count() {
      Meteor.call("incrementClicks", (err, res) => {
        // console.log(`err: ${err}`);
        // console.log(`res: ${res}`);
      });
    }
  }
};
</script>

<style scoped></style>
