import { restaurantType } from "../types/resturantType.js"
import Restaurant from "../models/resturantModel.js"
import { ClientSession } from "mongoose";
import { userType } from "../types/userType.js";
import User from "../models/userModel.js";
const updateResturant=async(id:string,data:restaurantType)=>{
    const updateResturant=await Restaurant.findByIdAndUpdate(id,data,{returnDocument:"after"});
    return updateResturant;
}
const findRestaurantByOwner = async (
  owner: string,
) => {
  const resturant=await Restaurant.findById(owner);
  return resturant;
};

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
const getSpecificResturantData=async(slug:string)=>{
    const getSpecificResturantData=await Restaurant.findOne({slug});
    return getSpecificResturantData;
}   
const getDashBoardData=async(id:string)=>{
    const getDashBoardData=await Restaurant.findById(id);
    return getDashBoardData;
}
const findRestaurantBySlug = async (
  slug: string,
  session?: ClientSession
) => {
  return Restaurant.findOne({ slug }).session(session || null);
};

const findUserByEmail = async (
  email: string,
  session?: ClientSession
) => {
  return User.findOne({ email }).session(session || null);
};
const createOwner = async (
  ownerData: userType,
  session: ClientSession
) => {
  const owner = new User(ownerData);

  await owner.save({ session });

  return owner;
};
const createRestaurant = async (
  restaurantData:restaurantType,
  session: ClientSession
) => {
  const restaurant = new Restaurant(restaurantData);

  await restaurant.save({ session });

  return restaurant;
};
const findRestaurantByEmail = async (
  email: string,
  session?: ClientSession
) => {
  return Restaurant.findOne({ restaurantEmail: email }).session(session || null);
};
export {updateResturant,deleteResturant,getProfile,getAllBranches,getSpecificResturantData,getDashBoardData,createOwner,findRestaurantBySlug,findUserByEmail,createRestaurant,findRestaurantByEmail,findRestaurantByOwner}