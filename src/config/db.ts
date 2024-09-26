import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("mongoose connect");
  } catch (error) {
    console.error("mongoBD connection error : '", error);
    process.exit(1);
  }
};

export default connectDB;
