import express from 'express'
//import functions
import { postItem,getAllItems,updateSpecificItem,deleteSpecificItem,getSpecificItem } from '../controllers/itemController.js';
const itemRouter=express.Router();
itemRouter.get("/",getAllItems); //SHOW WHOLE ITEMS
itemRouter.post("/",postItem); //CREATE A NEW ITEM
itemRouter.get("/:id",getSpecificItem) //GET SPECIFIC ITEM
itemRouter.patch("/:id",updateSpecificItem) //UPDATE SPECIFIC Item
itemRouter.delete("/:id",deleteSpecificItem) //DELETE SPECIFIC Item
export default itemRouter;