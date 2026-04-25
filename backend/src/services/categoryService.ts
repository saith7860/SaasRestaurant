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
   await categoryRepo.createMenu(category);
}
const getSpecificCategory=async(category?:string)=>{
    if (!category) {
       throw new ApiError(404,'Category does not found')
    }
    const specificData=await categoryRepo.getSpecificCategory(category);
    return specificData;
}
export {fetchMenu,createMenu,getSpecificCategory}