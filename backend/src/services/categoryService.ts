import * as categoryRepo from '../repos/categoryRepo.js';
import { ApiError } from '../middlewares/errorHandler.js';
import { categorySchema } from '../validators/categoryValidator.js';
import { CategoryType } from '../types/category.js';
const fetchMenu=async()=>{
   const menus=await categoryRepo.showAllMenu();
   if (!menus.length) {
    throw new ApiError(404,'Menu not found');
   }
   return menus;
}
const createMenu=async(category:CategoryType)=>{
    const {data,error}=categorySchema.safeParse(category);
    if (error) {
        console.log('error ',error)
        return;
    }
   const newCategory=await categoryRepo.createMenu(data);
}
export {fetchMenu,createMenu}