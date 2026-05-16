import { NextFunction,Request,Response } from "express";
import * as branchService from "../services/branchService.js";
const createBranch=async(req:Request,res:Response,next:NextFunction)=>{
    try {
    const result=await branchService.createBranch(req.body);
        return res.json({
            success:"true",
            message:"Branch created successfully",
            data:result
        })
    } catch (error) {
        next(error)
    }
}
const updateBranch=async(req:Request,res:Response,next:NextFunction)=>{
    try {
    const result=await branchService.updateBranch(req.params.id as string,req.body);
        return res.json({
            success:"true",
            message:"Branch updated successfully",
            data:result
        })
    } catch (error) {
        next(error)
    }
}
const deleteBranch=async(req:Request,res:Response,next:NextFunction)=>{
    try {
    const result=await branchService.deleteBranch(req.params.id as string);
        return res.json({
            success:"true",
            message:"Branch deleted successfully",
            data:result
        })
    } catch (error) {
        next(error)
    }
}
// const getProfile=async(req:Request,res:Response,next:NextFunction)=>{
//     try {
//     const result=await branchService.getProfile(req.params.id as string);
//         return res.json({
//             success:"true",
//             message:"Branch profile",
//             data:result
//         })
//     } catch (error) {
//         next(error)
//     }
// }
export {createBranch,updateBranch,deleteBranch}