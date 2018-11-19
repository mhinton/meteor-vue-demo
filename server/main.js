import { Meteor } from "meteor/meteor";
import { onPageLoad } from "meteor/server-render";
import { Accounts } from "meteor/accounts-base";
// import Collections from "../lib/collections";
import { Clicks } from "../lib/collections";
import "./publications";
import "../lib/methods";

Meteor.startup(() => {
  // Code to run on server startup.
  console.log(`Greetings from ${module.id}!`);
  Clicks.remove({});
  Clicks.insert({ count: 0 });
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({ username: "developer", password: "one2three4" });
  }
});

onPageLoad(sink => {
  // Code to run on every request.
  sink.renderIntoElementById(
    "server-render-target",
    `Server time: ${new Date()}`
  );
});
