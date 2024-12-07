import express from "express";
import cors from "cors";
import { connectDB } from './Config/db.js';
import {addFood } from '../controllers/FoodControllers.js'

// App configuration
const app = express();
const port = 4000; 

// Middleware
app.use(express.json()); 
app.use(cors()); 

//db connection
connectDB();

//Api endpoint
app.use( "/api/food",foodRouter);

// Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

