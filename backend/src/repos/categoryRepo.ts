import Category from "../models/categoryModel.js"
import { CategoryType } from '../types/category.js';
const showAllMenu=async(id:string)=>{
    const menu=await Category.find({branch:id}).populate("items");
   return menu;
} 
const getAllCategoriesOfResturant=async(id:string)=>{
    const categories=await Category.find({restaurantId:id});
    return categories;
}
const createMenu=async(data:CategoryType)=>{
  const newCategory=new Category(data);
  await newCategory.save();
  return newCategory;
}
const getSpecificCategoryAndRestaurant=async(category:string,restaurantId:string)=>{
  const categoryData=await Category.findOne({category,restaurantId});
  return categoryData;
}
const updateCategory=async(id:string,data:CategoryType)=>{
  const category=await Category.findByIdAndUpdate(id,data,{returnDocument:"after"});
  return category;
}
const deleteCategory=async(id:string)=>{
  const category=await Category.findByIdAndDelete(id);
  return category;
}
export {showAllMenu,createMenu,getSpecificCategoryAndRestaurant,updateCategory,deleteCategory,getAllCategoriesOfResturant}