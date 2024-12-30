import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const DB: string = process.env.MONGODB_URL as string;

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
    try {
      global.mongoose.promise = mongoose.connect(DB);
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
      throw err;
    }
  }

  global.mongoose.conn = await global.mongoose.promise;

  if (global.mongoose.conn) {
    console.log("MongoDB connection established successfully.");
  }
  return global.mongoose.conn;
}

// Export the function
export default Dbconnect;

// Example usage
(async () => {
  try {
    await Dbconnect();
  } catch (err) {
    console.error("Database connection failed:", err);
  }
})();
