import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/food_delivery";

  try {
    await mongoose.connect(uri);
    console.log("Connected DB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error?.message || error);
  }
};

