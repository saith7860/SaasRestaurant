import { Request,Response,NextFunction } from "express"
import * as userService from '../services/userService.js'
import { ApiError } from "../middlewares/errorHandler.js";
export const createUser=async(req:Request,res:Response,next:NextFunction)=>{
try {
   await userService.createUser(req.body);
    return res.json({
      success: "true",
      message:"User created successfully"
    });
   
       
} catch (error) {
    next(error)
}
}
export const loginUser=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {refreshToken,token:accessToken,role}=await userService.loginUser(req.body);
    res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7 * 1000, // 7 days in milliseconds
  });
    return res.json({
      success: "true",
      message:"User logged in successfully",
      token:accessToken,
      role:role
    });
} catch (error) {
    next(error)
}
}
export const createNewAccessToken=async(req:Request,res:Response,next:NextFunction)=>{
try {
   const refreshToken=req.cookies.refreshToken;
   console.log("cookies",req.cookies);
   console.log("refresh token is",refreshToken);
   console.log("Headers",req.headers);
   
   
    if (!refreshToken) {
     throw new ApiError(401,'Refresh token not found in cookies')
    }
   const accessToken=await userService.generateNewAccessToken(refreshToken);
   return res.json({
     success: "true",
     message: "New access token created successfully",
     token:accessToken
   })
} catch (error) {
  console.log('error in refresh token',error);
    next(error)
}
}
export const logoutUser=async(req:Request,res:Response,next:NextFunction)=>{
try {
     res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
  return res.json({
    success: "true",
    message: "User logged out successfully",
  })
} catch (error) {
    next(error)
}
}
// export const getProfile=async(req:Request,res:Response,next:NextFunction)=>{
// try {
//     const user = await userService.getProfile(req.userId as string);
//     return res.json({
//         success: "true",
//         message: "User profile",
//         user
//     });
// } catch (error) {
//     next(error)
// }
// }

