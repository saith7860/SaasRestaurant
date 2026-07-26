import express from "express";
import { checkSuperAdmin } from "../tokens/jwt.js";
import {createRestaurantBySuperAdmin} from "../controllers/superAdminController.js"
import { authMiddleware } from "../tokens/jwt.js";
import { createRestaurantValidator } from "../validators/resturantValidator.js";
const superAdminRouter = express.Router();
import validate from "../middlewares/validationMiddleware.js";
import { uploadMultipleImagesToCloudinary } from "../services/uploadService.js";
import { validateRestaurantImages } from "../validators/validateItem.js";
superAdminRouter.post(
  "/create-restaurant",
  authMiddleware,
  checkSuperAdmin,
  validateRestaurantImages,
  validate(createRestaurantValidator),
  createRestaurantBySuperAdmin
);

export default superAdminRouter;