import mongoose from "mongoose";
const mongoUrl = process.env.DBCONNECTION;
//connecting database
const connectDB = async () => {
  try {
    if (mongoUrl) {
      await mongoose.connect(mongoUrl);
      console.log("database connected successfully");
    } else {
      console.log("Mongo url is undefined");
    }
  } catch (error) {
    console.log("Error is connecting database", error);
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
