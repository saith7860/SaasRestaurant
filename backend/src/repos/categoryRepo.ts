import Category from "../models/categoryModel.js"
import { CategoryType } from '../types/category.js';
const showAllMenu=async()=>{
    return await Category.find();
} 
const createMenu=async(data:CategoryType)=>{
  const newCategory=new Category(data);
  await newCategory.save();
  return newCategory;
}
export {showAllMenu,createMenu}