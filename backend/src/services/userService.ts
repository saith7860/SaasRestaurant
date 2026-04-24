import { ApiError } from '../middlewares/errorHandler.js';
import { userType,loginUserType } from '../types/userType.js';
import * as userRepo from '../repos/userRepo.js'
const createUser=async(data:userType)=>{
  const newUser= await userRepo.create(data);
  if (!newUser) {
    return new ApiError(500,'Interval Server Error!User not created');
  }
  return newUser;
}
const loginUser=async(data:loginUserType)=>{
   
}
export {createUser,loginUser}