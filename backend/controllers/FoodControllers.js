import FoodModel from "../models/FoodModel.js";
import fs from "fs";
import multer from "multer";
import express from "express";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Add food item
const addFood = async (req, res) => {
  const image_filename = req.file.filename;

  const food = new FoodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// POST route for adding food
foodRouter.post("/add", upload.single("image"), addFood);

export default { addFood };