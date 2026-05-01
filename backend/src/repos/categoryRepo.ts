import Category from "../models/categoryModel.js"
import { CategoryType } from '../types/category.js';
import Item from "../models/itemModel.js";
import {Types} from 'mongoose';
const showAllMenu=async()=>{
    return await Category.find({});
   
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
 

// const speficCategory=await Category.find({
//     category: { $regex: `^${category}`, $options: 'i' }
// });

// const specificCategory=await Category.findOne({category}).populate({
//   path: "items",
//   model: "Item"
// });
// console.log(specificCategory);

// return specificCategory;
// const categoryDoc = await Category.findOne({ category });

// const populated = await Category.populate(categoryDoc, {
//   path: "items",
//   model: "Item"
// });
// return populated;
}
const showAllItems=async (items:Types.ObjectId[]) => {
    //  const itemsData=await Item.find({
    //   _id:{$in:items}
    //  });
    //  return itemsData;
    for(let i=0;i<items.length;i++){
      const result=await Item.find({_id:items[i]});
      return result;
    }
}
export {showAllMenu,createMenu,getSpecificCategory,showAllItems}