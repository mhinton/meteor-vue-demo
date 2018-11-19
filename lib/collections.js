import { Mongo } from "meteor/mongo";

// NOTE: Individual collection exports
export const Clicks = new Mongo.Collection("clicks");

// NOTE: An object to contain all the collections, mostly for use in the console
const Collections = {
  Clicks
};

export default Collections;
