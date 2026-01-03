import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/contact`);
    console.log("✅ DB Connectd");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
