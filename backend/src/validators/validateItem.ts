import { Request,Response,NextFunction } from "express";
import { ApiError } from "../middlewares/errorHandler.js";
export const validateItem = (req:Request, res:Response, next:NextFunction) => {
  if (!req.file) {
    throw new ApiError(400,"Image file is required")
  }
  next();
};