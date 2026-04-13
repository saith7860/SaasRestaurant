import Item from "../models/itemModel.js";
import Category from "../models/categoryModel.js";
import type { ItemType } from "../types/itemType.js";
const showAllItems=async()=>{
    return await Item.find({})
} 
const createItem=async(data:ItemType)=>{
  const newItem=new Item(data);
  await newItem.save();
  return newItem;
}
const getSpecificCategoryId=async(category:string)=>{
const speficCategory=await Category.find({
    category: { $regex: `^${category}`, $options: 'i' }
});
return speficCategory;
}
export {showAllItems,createItem,getSpecificCategoryId}