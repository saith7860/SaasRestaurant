import express from 'express';
const resturantRouter=express.Router();
import { authMiddleware,checkAdmin, checkSuperAdmin } from '../tokens/jwt.js';
import { uploadRestaurantImages } from '../middlewares/uploadMiddleware.js';
import {updateRestaurantImages,updateResturant,deleteResturant,getAllBranches,getSpecificResturantData,getDashBoardData } from "../controllers/resturantController.js"
resturantRouter.get("/:id/branches",authMiddleware,checkAdmin,getAllBranches)
resturantRouter.patch("/update-resturant/:id",authMiddleware,checkAdmin,updateResturant);//update a resturant
resturantRouter.delete("/delete-resturant/:id",authMiddleware,checkAdmin,deleteResturant);//delete a resturant
resturantRouter.get("/:slug",getSpecificResturantData);
resturantRouter.patch("/update-images",authMiddleware,checkAdmin,uploadRestaurantImages,updateRestaurantImages)
resturantRouter.get("/admin/dashboard",authMiddleware,checkAdmin,getDashBoardData);
export default resturantRouter;
