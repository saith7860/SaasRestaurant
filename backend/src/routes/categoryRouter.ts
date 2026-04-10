import express from 'express'
//import functions
import { getAllMenu,postAllMenu,getSpecificCategory,updateSpecificCategory ,deleteSpecificCategory} from '../controllers/categoryController.js';
const categoryRouter=express.Router();
categoryRouter.get("/",getAllMenu); //SHOW WHOLE MENU
categoryRouter.post("/",postAllMenu); //CREATE A NEW CATEGORY
categoryRouter.get("/:id",getSpecificCategory) //GET SPECIFIC CATEGORY
categoryRouter.patch("/:id",updateSpecificCategory) //UPDATE SPECIFIC CATEGORY
categoryRouter.delete("/:id",deleteSpecificCategory) //DELETE SPECIFIC CATEGORY
export default categoryRouter;