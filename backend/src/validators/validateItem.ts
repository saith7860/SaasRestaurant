import { Request,Response,NextFunction } from "express";
import { ApiError } from "../middlewares/errorHandler.js";
export const validateImage = (req:Request, res:Response, next:NextFunction) => {
  if (!req.file) {
    throw new ApiError(400,"Image file is required")
  }
  next();
};
export const validateRestaurantImages = (req:Request, res:Response, next:NextFunction) => {
  console.log(req.files)
  if (!req.files || req.files.length === 0) {
    throw new ApiError(400,"Image files are required")
  }
  next(); 
};