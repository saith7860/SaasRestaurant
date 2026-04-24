import User from "../models/userModel.js";
import { userType } from "../types/userType.js";

export const create=async(data:userType)=>{
  const newUser=new User(data);
  await newUser.save();
  return newUser;
}
export const isEmailExists=async(email:string)=>{
  const findUser=await User.findOne({email});
  if (findUser) {
    return true;
  }
  return false;
}
