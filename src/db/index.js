import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGO_DB_URL } from "../constants.js";
dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${MONGO_DB_URL}`,
  
    );
    console.log("MONGO DB SUCCESSFULLY CONNECTED");
    console.log(`HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error(" MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
