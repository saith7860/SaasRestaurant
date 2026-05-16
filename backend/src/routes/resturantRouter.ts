import express from 'express';
const resturantRouter=express.Router();
import { authMiddleware,checkAdmin, checkSuperAdmin } from '../tokens/jwt.js';
import {createResturant,updateResturant,deleteResturant,getAllBranches,getSpecificResturantData,getDashBoardData } from "../controllers/resturantController.js"
resturantRouter.get("/:id/branches",authMiddleware,checkAdmin,getAllBranches)
resturantRouter.post("/create-resturant",authMiddleware,checkAdmin,createResturant);//create a resturant
resturantRouter.patch("/update-resturant/:id",authMiddleware,checkAdmin,updateResturant);//update a resturant
resturantRouter.delete("/delete-resturant/:id",authMiddleware,checkAdmin,deleteResturant);//delete a resturant
resturantRouter.get("/:slug",getSpecificResturantData);
resturantRouter.get("/admin/dasboard",authMiddleware,checkAdmin,getDashBoardData);
export default resturantRouter;
