import mongoose from "mongoose";
import config from "./config.js";

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(config.CONNECTION_STRING, {
      dbName: config.DATABASE,
    });
    isConnected = true;
    console.log("🔗 MongoDB connected to:", db.connection.name);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}