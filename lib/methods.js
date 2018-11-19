import { Meteor } from "meteor/meteor";
import Collections from "./collections";

const { Clicks } = Collections;

Meteor.methods({
  incrementClicks() {
    const clicks = Clicks.findOne();
    const cnt = clicks.count + 1;
    const res = Clicks.update(clicks._id, { count: cnt });
    return res;
  }
});
