import { restaurantType } from "../types/resturantType.js"
import Restaurant from "../models/resturantModel.js"

const createResturant=async(data:restaurantType)=>{
    const newResturant=new Restaurant(data);
    await newResturant.save();
    return newResturant;
}
const updateResturant=async(id:string,data:restaurantType)=>{
    const updateResturant=await Restaurant.findByIdAndUpdate(id,data,{new:true});
    return updateResturant;
}
const deleteResturant=async(id:string)=>{
    const deleteResturant=await Restaurant.findByIdAndDelete(id);
    return deleteResturant;
}
const getProfile=async(id:string)=>{
    const getProfile=await Restaurant.findById(id);
    return getProfile;
}
const getAllBranches=async(id:string)=>{
    const getAllBranches=await Restaurant.findById(id).populate("branches");
    return getAllBranches;
}
export {createResturant,updateResturant,deleteResturant,getProfile,getAllBranches}