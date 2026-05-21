import express from 'express'
const variantRouter=express.Router();
import validate from '../middlewares/validationMiddleware.js';
import variantSchema from '../validators/variantValidator.js';
import { authMiddleware,checkAdmin } from '../tokens/jwt.js';
import * as variantController from '../controllers/variantController.js';
variantRouter.post("/create-variant",validate(variantSchema),authMiddleware,checkAdmin,variantController.postVariant) //CREATE A NEW VARIANT
variantRouter.get("/get-variant/:id",variantController.getSpecificVariant) //GET SPECIFIC VARIANT
variantRouter.patch("/update-variant/:id",authMiddleware,checkAdmin,variantController.updateSpecificVariant) //UPDATE SPECIFIC VARIANT
variantRouter.delete("/delete-variant/:id",authMiddleware,checkAdmin,variantController.deleteSpecificVariant) //DELETE SPECIFIC VARIANT
export default variantRouter;