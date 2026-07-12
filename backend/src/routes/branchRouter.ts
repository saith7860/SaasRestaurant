import express from 'express';
const branchRouter=express.Router();
import { authMiddleware,checkAdmin } from '../tokens/jwt.js';
import {createBranch,updateBranch,deleteBranch } from '../controllers/branchController.js';
import validate from '../middlewares/validationMiddleware.js';
import { BranchValidator } from '../validators/branchValidator.js';
branchRouter.post("/create-branch",authMiddleware,checkAdmin,validate(BranchValidator),createBranch);//create a resturant
branchRouter.put("/update-branch/:id",authMiddleware,checkAdmin,validate(BranchValidator),updateBranch);//update a resturant
branchRouter.delete("/delete-branch/:id",authMiddleware,checkAdmin,deleteBranch);//delete a resturant
export default branchRouter;
