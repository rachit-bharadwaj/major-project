import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGO_URI) {
    throw new Error("MONGO_URI is missing in the environment variables");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;
