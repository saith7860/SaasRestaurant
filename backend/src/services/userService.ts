import { ApiError } from '../middlewares/errorHandler.js';
import { userType,loginUserType } from '../types/userType.js';
import * as userRepo from '../repos/userRepo.js'
import bcrypt from 'bcryptjs';
const saltRounds=10;
const createUser=async(data:userType)=>{
   const {password,email}=data;

   const checkEmailExists=await userRepo.isEmailExists(email);
   if (checkEmailExists) {
    throw new ApiError(409,'Email alrady exists');
   }
   else{
  const hashPassword=await bcrypt.hash(password,saltRounds);
  const newUser= await userRepo.create({...data,password:hashPassword});
  if (!newUser) {
    return new ApiError(500,'Interval Server Error!User not created');
  }
  return newUser;
   }
  
   
  
}
const loginUser=async(data:loginUserType)=>{
   
}
export {createUser,loginUser}