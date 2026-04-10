import express from 'express'
//import functions
import { postVariant } from '../controllers/variantController.js';
const vairantRouter=express.Router();
// vairantRouter.get("/",getAllVarients); //SHOW WHOLE ITEMS
vairantRouter.post("/",postVariant); //CREATE A NEW ITEM
// vairantRouter.get("/:id",getSpecificVariant) //GET SPECIFIC ITEM
// vairantRouter.patch("/:id",updateSpecificVariant) //UPDATE SPECIFIC Item
// vairantRouter.delete("/:id",deleteSpecificVariant) //DELETE SPECIFIC Item
export default vairantRouter;