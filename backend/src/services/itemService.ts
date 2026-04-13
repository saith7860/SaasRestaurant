import { ApiError } from '../middlewares/errorHandler.js';
import * as itemRepo from '../repos/itemRepo.js'
import type { ItemType } from '../types/itemType.js';
import Category from '../models/categoryModel.js';
const fetchAllItems=async()=>{
   const items=await itemRepo.showAllItems();
   if (!items.length) {
    throw new ApiError(404,'Items not found');
   }
   return items;
}
const createItem=async(category:string,itemData:ItemType)=>{
   const foundCategoryId=await itemRepo.getSpecificCategoryId(category);
   console.log(foundCategoryId);
   
   if (!foundCategoryId) {
    throw new ApiError(404,'Cateogory is not defined')
   }
   const newItem=await itemRepo.createItem(itemData);
   return newItem;
}
const getSpecificCategory=async(category?:string)=>{
    // if (!category) {
    //    return new ApiError(404,'Category does not found')
    // }
    // const specificData=await categoryRepo.getSpecificCategory(category);
    // return specificData;
}
export {fetchAllItems,createItem,getSpecificCategory}