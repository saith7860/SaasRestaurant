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
//fectch items
// const fetchItems=async(id:string)=>{
//    const items=await categoryRepo.showAllItems(id);
//    if(items){
//     return items;
//    }
//    throw new ApiError(401,'Items does not exist for this category');
  
  
// }
const createMenu=async(category:CategoryType)=>{
   await categoryRepo.createMenu(category);
}
const getSpecificCategory=async(category:string)=>{

    const specificData=await categoryRepo.getSpecificCategory(category);
      if (!specificData) {
       throw new ApiError(404,'Category does not found')
    }
    if (specificData.items.length==0) {
       throw new ApiError(404,'No items found for this cateogry')
    }
   //  console.log(specificData.items);
    
   //  const findItems=await categoryRepo.showAllItems(specificData.items);
   //  console.log(findItems);
    
    return specificData;
}
export {fetchMenu,createMenu,getSpecificCategory}