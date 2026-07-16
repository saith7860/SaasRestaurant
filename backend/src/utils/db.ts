import mongoose from "mongoose";
import { ApiError } from "../middlewares/errorHandler.js";
//connecting database
const connectDB = async () => {
  try {
    if (process.env.NODE_ENV=="development"||process.env.NODE_ENV=="testing") {
      await mongoose.connect(process.env.DBCONNECTION_TESTING as string);
      console.log("database connected successfully");
    }else{
      await mongoose.connect(process.env.DBCONNECTION as string);
      console.log("database connected successfully");
    }
  } catch (error) {
    throw new ApiError(500,'Database connection failed');
  }
};
//discoonecting database
const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("connection closed successfully");
  } catch (error) {
    console.log("Problem in connecting database", error);
  }
};
export { connectDB, disconnectDB };
