import { Mongoose } from "mongoose";

// Declare the `mongoose` property on the global object
declare global {
  var mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null };
}

export {};

