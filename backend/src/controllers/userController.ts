import { Request,Response,NextFunction } from "express"
import * as userService from '../services/userService.js'
export const createUser=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const user=await userService.createUser(req.body);
} catch (error) {
    
}
}
export const loginUser=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const loginUser=await userService.loginUser(req.body);
} catch (error) {
    
}
}
