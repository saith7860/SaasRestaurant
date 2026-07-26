import { Request, Response, NextFunction } from "express";
import restaurantService from "../services/superAdminService.js";

const createRestaurantBySuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const files = req.files as {logo?:Express.Multer.File[],banner?:Express.Multer.File[]};
    const result =await restaurantService.createRestaurantBySuperAdmin(req.body,files);

    return res.status(201).json({
      success: true,
      message: "Restaurant created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export {createRestaurantBySuperAdmin}