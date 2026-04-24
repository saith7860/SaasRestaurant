import User from "../models/userModel.js";
import { userType } from "../types/userType.js";

export const create=async(data:userType)=>{
  const newUser=new User(data);
  await newUser.save();
  return newUser;
}