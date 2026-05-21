import { variantType } from "../types/itemType.js"
import * as variantRepo from '../repos/variantRepo.js'
import { ApiError } from "../middlewares/errorHandler.js";

const postVariant=async(data:variantType)=>{
 const isItemExists=await variantRepo.isItemExists(data.itemId);
 if(!isItemExists){
    throw new ApiError(404,"Item not found");
 }

 const createVariant=await variantRepo.createVariant(data);
 if(!createVariant){
    throw new ApiError(400,"Variant not created");
 }
 isItemExists.variants.push(createVariant._id);
 await isItemExists.save();
return createVariant
}
const getSpecificVariant=async(id:string)=>{
    const specificVariant=await variantRepo.getSpecificVariant(id);
    if(!specificVariant){
        throw new ApiError(404,"Variant not found");
    }
    return specificVariant;
}
const updateSpecificVariant=async(id:string,data:variantType)=>{
    const foundItem=await variantRepo.isItemExists(data.itemId);
    if(!foundItem){
        throw new ApiError(404,"Item not found");
    }

    const updatedVariant=await variantRepo.updateSpecificVariant(id,data);
    return updatedVariant;
}
const deleteSpecificVariant=async(id:string)=>{
    const foundVariant=await variantRepo.getSpecificVariant(id);
    if(!foundVariant){
        throw new ApiError(404,"Variant not found");
    }

    const deletedVariant=await variantRepo.deleteSpecificVariant(id);
    return deletedVariant;
}
export {postVariant,getSpecificVariant,updateSpecificVariant,deleteSpecificVariant}