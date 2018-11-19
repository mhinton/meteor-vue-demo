import { Meteor } from "meteor/meteor";
import { Clicks } from "../lib/collections";

Meteor.publish("userNames", () =>
  Meteor.users.find({}, { fields: { username: 1 } })
);

Meteor.publish("clicks", () => Clicks.find());
