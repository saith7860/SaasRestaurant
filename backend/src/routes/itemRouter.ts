import express from 'express'
//import functions
import { postItem,getAllItems,updateSpecificItem,deleteSpecificItem,getSpecificItem } from '../controllers/itemController.js';
import validate from '../middlewares/validationMiddleware.js';
import { ItemSchema } from '../validators/itemValidator.js';
const itemRouter=express.Router();
itemRouter.get("/",getAllItems); //SHOW WHOLE ITEMS
itemRouter.post("/",validate(ItemSchema),postItem); //CREATE A NEW ITEM
itemRouter.get("/:id",getSpecificItem) //GET SPECIFIC ITEM
itemRouter.patch("/:id",updateSpecificItem) //UPDATE SPECIFIC Item
itemRouter.delete("/:id",deleteSpecificItem) //DELETE SPECIFIC Item
export default itemRouter;