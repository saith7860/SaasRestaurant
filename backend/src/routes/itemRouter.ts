import express from 'express'
//import functions
import { postItem,getAllItems,updateSpecificItem,deleteSpecificItem,getSpecificItem } from '../controllers/itemController.js';
import validate from '../middlewares/validationMiddleware.js';
import { ItemSchema } from '../validators/itemValidator.js';
import { authMiddleware,checkAdmin } from '../tokens/jwt.js';
const itemRouter=express.Router();
itemRouter.get("/",getAllItems); //SHOW WHOLE ITEMS
itemRouter.post("/",validate(ItemSchema),authMiddleware,checkAdmin,postItem); //CREATE A NEW ITEM
itemRouter.get("/:id",getSpecificItem) //GET SPECIFIC ITEM
itemRouter.patch("/:id",authMiddleware,checkAdmin,updateSpecificItem) //UPDATE SPECIFIC Item
itemRouter.delete("/:id",authMiddleware,checkAdmin,deleteSpecificItem) //DELETE SPECIFIC Item
export default itemRouter;