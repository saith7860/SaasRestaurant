import express from 'express';
const branchRouter=express.Router();
import { authMiddleware,checkAdmin } from '../tokens/jwt.js';
import {createBranch,updateBranch,deleteBranch } from '../controllers/branchController.js';
branchRouter.post("/create-branch",authMiddleware,checkAdmin,createBranch);//create a resturant
branchRouter.patch("/update-branch/:id",authMiddleware,checkAdmin,updateBranch);//update a resturant
branchRouter.delete("/delete-branch/:id",authMiddleware,checkAdmin,deleteBranch);//delete a resturant
export default branchRouter;
