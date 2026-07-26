import express from 'express'
import {authMiddleware,checkAdmin} from '../tokens/jwt.js'
import validate from '../middlewares/validationMiddleware.js'
import {createDealSchema} from '../validators/dealValidator.js';
import * as dealController from '../controllers/dealController.js';
import { uploadSingleImage } from '../middlewares/uploadMiddleware.js';
import { validateImage } from '../validators/validateItem.js';
const dealRouter=express.Router();
dealRouter.post("/create-deal",authMiddleware,checkAdmin,uploadSingleImage,validate(createDealSchema),validateImage,dealController.createDeal)  //CREATE A NEW DEAL
dealRouter.get("/deals",dealController.getAllDeals) //GET ALL DEALS
dealRouter.get("/deal/:id",dealController.getSpecificDeal) //GET SPECIFIC DEAL
dealRouter.put("/update-deal/:id",authMiddleware,checkAdmin,uploadSingleImage,validate(createDealSchema),validateImage,dealController.updateSpecificDeal) //UPDATE SPECIFIC DEAL
dealRouter.delete("/delete-deal/:id",authMiddleware,checkAdmin,dealController.deleteSpecificDeal) //DELETE SPECIFIC DEAL
export default dealRouter;
