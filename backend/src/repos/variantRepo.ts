import Variant from "../models/variantModel.js";
import type { variantType } from "../types/itemType.js";
import Item from "../models/itemModel.js";
const createVariant=async(data:variantType)=>{
    const newVariant=new Variant(data);
    await newVariant.save();
    return newVariant;
}
const isItemExists=async(id:string)=>{
    const item=await Item.findById(id);
    return item;
}
const getSpecificVariant=async(id:string)=>{
    const variant=await Variant.findById(id);
    return variant;
}
const updateSpecificVariant=async(id:string,data:variantType)=>{
    const updatedVariant=await Variant.findByIdAndUpdate(id,data,{new:true});
    return updatedVariant;
}
const deleteSpecificVariant=async(id:string)=>{
    const deletedVariant=await Variant.findByIdAndDelete(id);
    return deletedVariant;
}
export {createVariant,isItemExists,getSpecificVariant,updateSpecificVariant,deleteSpecificVariant}