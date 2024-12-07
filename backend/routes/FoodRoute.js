import express from 'express';
import { addFood } from '../controllers/FoodControllers.js';
import multer from 'multer';


 const foodRouter = express.Router();
 
 
 export default foodRouter;