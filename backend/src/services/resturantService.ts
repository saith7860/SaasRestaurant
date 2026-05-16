import { restaurantType } from "../types/resturantType.js";
import * as resturantRepo from "../repos/resturantRepo.js"
import * as branchRepo from "../repos/branchRepo.js"
import * as categoryRepo from "../repos/categoryRepo.js";
import { ApiError } from "../middlewares/errorHandler.js";
import * as itemRepo from "../repos/itemRepo.js";
const createResturant=async(data:restaurantType)=>{
    const newResturant=await resturantRepo.createResturant(data);
    if (!newResturant) {
        throw new ApiError(400,"Resturant not created")
    }
    return newResturant
}
const getDashBoardData=async(id:string)=>{
    console.log(id);
    
    const resuturant=await resturantRepo.getDashBoardData(id);
        if (!resuturant) {
        throw new ApiError(404,"Resturant not found")
    }
    const branches=await branchRepo.getAllBranches(id);
    if (!branches) {
        throw new ApiError(404,"Branches not found")
    }
    const category=await categoryRepo.getAllCategoriesOfResturant(id);
    if (!category) {
        throw new ApiError(404,"Categories not found")
    }
    const items=await itemRepo.showAllItems(id);
    if (!items) {
        throw new ApiError(404,"Items not found")
    }

    return {resuturant,branches,category,items}
}
const updateResturant=async(id:string,data:restaurantType)=>{
    const updateResturant=await resturantRepo.updateResturant(id,data);
    if (!updateResturant) {
        throw new ApiError(400,"Resturant not updated")
    }
    return updateResturant
}
const deleteResturant=async(id:string)=>{
    const deleteResturant=await resturantRepo.deleteResturant(id);
    if (!deleteResturant) {
        throw new ApiError(400,"Resturant not deleted")
    }
    return deleteResturant
}
const getProfile=async(id:string)=>{
    const getProfile=await resturantRepo.getProfile(id);
    if (!getProfile) {
        throw new ApiError(404,"Resturant not found")
    }
    return getProfile
}
const getAllBranches=async(id:string)=>{
    const getAllBranches=await resturantRepo.getAllBranches(id);
    if (!getAllBranches) {
        throw new ApiError(404,"Resturant not found")
    }
    return getAllBranches
} 
const getSpecificResturantData=async(slug:string)=>{
    const getSpecificResturantData=await resturantRepo.getSpecificResturantData(slug);
    if (!getSpecificResturantData) {
        throw new ApiError(404,"Resturant not found")
    }
    const branches=await branchRepo.getAllBranches(getSpecificResturantData._id as any);//typescript giving issues here
    if (!branches) {
        throw new ApiError(404,"Branches not found")
    }
    const category=await categoryRepo.getAllCategoriesOfResturant(getSpecificResturantData._id as any);//typescript giving issues here
    if (!category) {
        throw new ApiError(404,"Category not found");
    }
    return {getSpecificResturantData,branches,category}
}
export {createResturant,updateResturant,deleteResturant,getProfile,getAllBranches,getSpecificResturantData,getDashBoardData}