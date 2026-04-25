import express from 'express'
//import functions
import { getAllMenu,postAllMenu,getSpecificCategory,updateSpecificCategory ,deleteSpecificCategory} from '../controllers/categoryController.js';
import validate from '../middlewares/validationMiddleware.js';
import { categorySchema } from '../validators/categoryValidator.js';
import { authMiddleware,checkAdmin } from '../tokens/jwt.js';
const categoryRouter=express.Router();
categoryRouter.get("/",getAllMenu); //SHOW WHOLE MENU
categoryRouter.post("/",validate(categorySchema),authMiddleware,checkAdmin,postAllMenu); //CREATE A NEW CATEGORY
categoryRouter.get("/category",getSpecificCategory) //GET SPECIFIC CATEGORY
categoryRouter.patch("/:id",authMiddleware,checkAdmin,updateSpecificCategory) //UPDATE SPECIFIC CATEGORY
categoryRouter.delete("/:id",authMiddleware,checkAdmin,deleteSpecificCategory) //DELETE SPECIFIC CATEGORY
export default categoryRouter;