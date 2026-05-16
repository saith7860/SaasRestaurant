import { restaurantType } from "../types/resturantType.js";
import * as resturantRepo from "../repos/resturantRepo.js"
import { ApiError } from "../middlewares/errorHandler.js";
const createResturant=async(data:restaurantType)=>{
    const newResturant=await resturantRepo.createResturant(data);
    if (!newResturant) {
        throw new ApiError(400,"Resturant not created")
    }
    return newResturant
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
export {createResturant,updateResturant,deleteResturant,getProfile,getAllBranches}