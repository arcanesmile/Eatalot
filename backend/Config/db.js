import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://arcanesmile999:smiles.m9jjf.mongodb.net/eatalot'
    );
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};