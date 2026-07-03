import Item from "../models/itemModel.js";
import Category from "../models/categoryModel.js";
import type { ItemType } from "../types/itemType.js";
import { Types } from "mongoose";
const showAllItems=async(id:string)=>{
    const items=await Item.find({restaurantId:id}).populate("variants")
    return items;
} 
const getItemByNameAndRestaurant=async(name:string,restaurantId:Types.ObjectId)=>{
    const item=await Item.findOne({name,restaurantId});
    return item;
}
const createItem=async(data:ItemType)=>{
  const newItem=new Item(data);
  await newItem.save();
  return newItem;
}
const getSpecificCategoryId=async(category:string)=>{
const speficCategory=await Category.findById(category);

return speficCategory;
}
const updateItem=async(id:string,data:ItemType)=> {
    const foundItem=await Item.findByIdAndUpdate(id,data, { returnDocument: 'after' });
    return foundItem;
}
const deleteItem=async(id:string)=> {
    const delItem=await Item.findByIdAndDelete(id);
    await Category.updateMany(
        {items:delItem?._id},
        {$pull:{items:delItem?._id}}
    )
    return delItem;
}
export {showAllItems,createItem,getSpecificCategoryId,updateItem,deleteItem,getItemByNameAndRestaurant}