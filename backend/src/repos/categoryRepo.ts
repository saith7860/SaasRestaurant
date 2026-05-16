import Category from "../models/categoryModel.js"
import { CategoryType } from '../types/category.js';
const showAllMenu=async(id:string)=>{
    const menu=await Category.find({branch:id}).populate("items");
   return menu;
} 
const createMenu=async(data:CategoryType)=>{
  const newCategory=new Category(data);
  await newCategory.save();
  return newCategory;
}
const getSpecificCategory=async(category:string)=>{
  const categoryData=await Category.findOne({category}).populate("items");
  console.log("POPULATED DATA:", categoryData);
  return categoryData;
}
const updateCategory=async(id:string,data:CategoryType)=>{
  const category=await Category.findByIdAndUpdate(id,data,{new:true});
  return category;
}
const deleteCategory=async(id:string)=>{
  const category=await Category.findByIdAndDelete(id);
  return category;
}
export {showAllMenu,createMenu,getSpecificCategory,updateCategory,deleteCategory}