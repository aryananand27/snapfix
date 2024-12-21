import mongoose, { Mongoose } from "mongoose";

const DB = process.env.MONGODB_URL;

if (!DB) {
  throw new Error("Please provide a MongoDB connection URL.");
}

// Initialize the global mongoose connection cache
global.mongoose = global.mongoose || { conn: null, promise: null };

async function Dbconnect(): Promise<Mongoose> {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    if (!DB) {
      throw new Error("MONGODB_URL is not defined.");
    }

    global.mongoose.promise = mongoose.connect(DB, {
      dbName: "snapfix",
    });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

export default Dbconnect;
