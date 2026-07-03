import * as categoryRepo from '../repos/categoryRepo.js';
import { ApiError } from '../middlewares/errorHandler.js';
import { categorySchema } from '../validators/categoryValidator.js';
import { CategoryType } from '../types/category.js';
const fetchMenu=async(id:string)=>{
   const menus=await categoryRepo.showAllMenu(id);
   if (!menus.length) {
    throw new ApiError(404,'Menu not found');
   }
   return menus;
}

const createMenu=async(data:CategoryType,restaurantId:string)=>{
   const category=await categoryRepo.getSpecificCategoryAndRestaurant(data.category,restaurantId);
   if (category) {
    throw new ApiError(400,'Category already exists');
   }
   const newCategory= categoryRepo.createMenu(data);
   if (!newCategory) {
    throw new ApiError(500,'Category not created');
   }
   return newCategory;
}
const getSpecificCategory=async(category:string,restaurantId:string)=>{

    const specificData=await categoryRepo.getSpecificCategoryAndRestaurant(category,restaurantId);
      if (!specificData) {
       throw new ApiError(404,'Category does not found')
    }
    if (specificData.items.length==0) {
       throw new ApiError(404,'No items found for this cateogry')
    }
    
    return specificData;
}
const updateCategory=async(id:string,data:CategoryType)=>{
   const category=await categoryRepo.updateCategory(id,data);
   if (!category) {
    throw new ApiError(400,"Category not updated")
   }
   return category;
}
const deleteCategory=async(id:string)=>{
   const category=await categoryRepo.deleteCategory(id);
   if (!category) {
    throw new ApiError(400,"Category not deleted")
   }
   return category;
}
export {fetchMenu,createMenu,getSpecificCategory,updateCategory,deleteCategory}