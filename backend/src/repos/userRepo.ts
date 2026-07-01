import User from "../models/userModel.js";
import { userType } from "../types/userType.js";
import { ClientSession } from "mongoose";
import { Types } from "mongoose";
export const create=async(data:userType)=>{
  const newUser=new User(data);
  await newUser.save();
  return newUser;
}
export const isEmailExists=async(email:string)=>{
  const findUser=await User.findOne({email});
  return findUser;
}
export const createUser=async(data:userType,session?:ClientSession)=>{
const newUser=new User(data);
await newUser.save(session? { session } : undefined)
return newUser
}
export const updateUserRestaurantId = async (
  userId: Types.ObjectId,
  restaurantId: Types.ObjectId,
  session: ClientSession
) => {
  return User.findByIdAndUpdate(
    userId,
    {
      restaurantId,
    },
    {
      returnDocument:'after',
      session,
    }
  );
};