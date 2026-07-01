import { Request, Response, NextFunction } from "express";
import restaurantService from "../services/superAdminService.js";

const createRestaurantBySuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result =
      await restaurantService.createRestaurantBySuperAdmin(req.body);

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