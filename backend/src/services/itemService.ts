import { ApiError } from '../middlewares/errorHandler.js';
import * as itemRepo from '../repos/itemRepo.js'
import type { ItemType } from '../types/itemType.js';
import Category from '../models/categoryModel.js';
import { ca } from 'zod/locales';
const fetchAllItems=async()=>{
   const items=await itemRepo.showAllItems();
   if (!items.length) {
    throw new ApiError(404,'Items not found');
   }
   return items;
}
//UPDATE ITEM
const updateSpecItem=async(id:string,data:ItemType)=>{
const update=await itemRepo.updateItemByName(id,data);
if (!update) {
   return new ApiError(400,'Server Error! Item not updated');
}
return update;
}
const deleteSpecificItem=async(id:string)=>{
const del=await itemRepo.deleteItemByName(id);
if (!del) {
   return new ApiError(400,'Server Error! Item not Deleted');
}
return del;
}
const createItem=async(category:string,itemData:ItemType)=>{
   console.log(category);
   
   const foundCategoryId=await itemRepo.getSpecificCategoryId(category);
   console.log(foundCategoryId);
   
   if (!foundCategoryId) {
    throw new ApiError(404,'Cateogory is not defined')
   }
   const newItem=await itemRepo.createItem(itemData);
   foundCategoryId.items.push(newItem._id);
   await foundCategoryId.save();
   return newItem;
}

export {fetchAllItems,createItem,updateSpecItem,deleteSpecificItem}