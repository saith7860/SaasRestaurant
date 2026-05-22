import { ApiError } from '../middlewares/errorHandler.js';
import * as itemRepo from '../repos/itemRepo.js'
import type { ItemType } from '../types/itemType.js';
//Fetch all items
// const fetchAllItems=async()=>{
//    const items=await itemRepo.showAllItems();
//    if (!items.length) {
//     throw new ApiError(404,'Items not found');
//    }
//    return items;
// }
//UPDATE ITEM
const updateSpecItem=async(id:string,data:ItemType)=>{
const update=await itemRepo.updateItemByName(id,data);
if (!update) {
   return new ApiError(400,'Server Error! Item not updated');
}
return update;
}
//Delete item
const deleteSpecificItem=async(id:string)=>{
const del=await itemRepo.deleteItemByName(id);
if (!del) {
   throw new ApiError(400,'Server Error! Item not Deleted');
}
return del;
}
//create item
const createItem=async(category:string,itemData:ItemType)=>{
   console.log("category id is ",category);
   
   const foundCategoryId=await itemRepo.getSpecificCategoryId(category);
   console.log("found category id is ",foundCategoryId);
   
   if (!foundCategoryId) {
    throw new ApiError(404,'Cateogory is not found')
   }
   const newItem=await itemRepo.createItem(itemData);
   if(!newItem){
    throw new ApiError(400,'Server Error! Item not created')
   }
   foundCategoryId.items.push(newItem._id);
   await foundCategoryId.save();
   return newItem;
}

export {createItem,updateSpecItem,deleteSpecificItem}