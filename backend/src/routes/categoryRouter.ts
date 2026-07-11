import express from 'express'
//import functions
import { getAllMenu,postAllMenu,getSpecificCategory,updateSpecificCategory ,deleteSpecificCategory} from '../controllers/categoryController.js';
import validate from '../middlewares/validationMiddleware.js';
import { categorySchema } from '../validators/categoryValidator.js';
import { authMiddleware,checkAdmin } from '../tokens/jwt.js';
const categoryRouter=express.Router();
categoryRouter.get("/:id/menu",getAllMenu); //SHOW WHOLE MENU
categoryRouter.post("/create-category",validate(categorySchema),authMiddleware,checkAdmin,postAllMenu); //CREATE A NEW CATEGORY
categoryRouter.get("/category",getSpecificCategory) //GET SPECIFIC CATEGORY
categoryRouter.patch("/update-category/:id",authMiddleware,checkAdmin,validate(categorySchema),updateSpecificCategory) //UPDATE SPECIFIC CATEGORY
categoryRouter.delete("/delete-category/:id",authMiddleware,checkAdmin,deleteSpecificCategory) //DELETE SPECIFIC CATEGORY
export default categoryRouter;