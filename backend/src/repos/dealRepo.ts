import Deal from "../models/dealsModel.js";
import { DealType } from "../types/dealType.js";
export const getDealByNameAndResturant=async(name:string,restaurantId:string)=>{
    return Deal.findOne({title:name,restaurantId:restaurantId});
}
export const createDeal=async(dealData:DealType)=>{
  const newDeal=new Deal(dealData);
  return await newDeal.save();
}
export const getAllDeals=async(restaurantId:string)=>{
  return Deal.find({restaurantId:restaurantId}).populate('items.itemId');
}
export const getSpecificDeal=async(id:string)=>{
  return Deal.findById(id).populate('items.itemId');
}
export const updateSpecificDeal=async(id:string,dealData:DealType)=>{
  return Deal.findByIdAndUpdate(id,dealData,{new:true}).populate('items.itemId');
}
export const deleteSpecificDeal=async(id:string)=>{
  return Deal.findByIdAndDelete(id);
}