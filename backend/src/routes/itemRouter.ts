import express from 'express'
//import functions
import { postItem,updateSpecificItem,deleteSpecificItem,getSpecificItem} from '../controllers/itemController.js';
import validate from '../middlewares/validationMiddleware.js';
import { ItemSchema } from '../validators/itemValidator.js';
import { authMiddleware,checkAdmin } from '../tokens/jwt.js';
import { uploadSingleImage } from '../middlewares/uploadMiddleware.js';
import { validateItem } from '../validators/validateItem.js';
const itemRouter=express.Router();
// itemRouter.get("/:branchId/items",getAllItems); //SHOW WHOLE ITEMS
itemRouter.post("/create-item",authMiddleware,checkAdmin,uploadSingleImage,validate(ItemSchema),validateItem,postItem); //CREATE A NEW ITEM
// itemRouter.get("/all-items/:id",authMiddleware,checkAdmin,getAllItems); //GET ALL ITEMS
itemRouter.get("/:id",getSpecificItem) //GET SPECIFIC ITEM
itemRouter.patch("/update-item/:id",authMiddleware,checkAdmin,uploadSingleImage,validateItem,validate(ItemSchema),updateSpecificItem) //UPDATE SPECIFIC Item
itemRouter.delete("/delete-item/:id",authMiddleware,checkAdmin,deleteSpecificItem) //DELETE SPECIFIC Item
export default itemRouter;