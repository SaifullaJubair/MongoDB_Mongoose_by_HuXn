import mongoose from "mongoose";

const connectDB = async (databaseURL) => {
  try {
    await mongoose.connect(databaseURL);
    console.log("Database Connect Successfully ...");
  } catch (error) {
    console.log(error || " Server Connect Filed");
  }
};

export default connectDB;
