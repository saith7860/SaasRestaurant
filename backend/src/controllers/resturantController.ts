import {Request,Response,NextFunction} from "express"
import { ApiError } from "../middlewares/errorHandler.js";
//import service
import * as resturantService from '../services/resturantService.js'
//create resturant
const createResturant=async(req:Request,res:Response,next:NextFunction)=>{
try{
    const result=await resturantService.createResturant(req.body);
    return res.json({
        success:"true",
        message:"Resturant created successfully",
        result
    });
}catch(error){
    next(error)
}}
const getDashBoardData=async(req:Request,res:Response,next:NextFunction)=>{
try{
    console.log(req.user);
    const resturantId=req.user?.restaurantId;
    if(!resturantId){
        throw new ApiError(404,"Resturant not found")
    }
    
    const result=await resturantService.getDashBoardData(resturantId);
    return res.json({
        success:"true",
        message:"Dashboard data",   
        result
    });
}catch(error){
    next(error)
}}
//get profile
// const getProfile=async(req:Request,res:Response,next:NextFunction)=>{
// try{
//     const userId=req.user?.userId;
//     const result=await resturantService.getProfile(userId);
//     return res.json({
//         success:"true",
//         message:"Resturant profile",
//         result
//     });
// }catch(error){
//     next(error)
// }}

//update resturant
const updateResturant=async(req:Request,res:Response,next:NextFunction)=>{
try{
    const result=await resturantService.updateResturant(req.params.id as string,req.body);
    return res.json({
        success:"true",
        message:"Resturant updated successfully",
        result
    });
}catch(error){
    next(error)
}}

//delete resturant
const deleteResturant=async(req:Request,res:Response,next:NextFunction)=>{
try{
    const result=await resturantService.deleteResturant(req.params.id as string);
    return res.json({
        success:"true",
        message:"Resturant deleted successfully",
        result
    });
}catch(error){
    next(error)
}}

//get all branches
const getAllBranches=async(req:Request,res:Response,next:NextFunction)=>{
try{
    const result=await resturantService.getAllBranches(req.params.id as string);
    return res.json({
        success:"true",
        message:"All branches",
        result
    });
}catch(error){
    next(error)
}}
const getSpecificResturantData=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const slug=req.params.slug as string;
        const result=await resturantService.getSpecificResturantData(slug);
        return res.json({
            success:"true",
            message:"Resturant data",
            result
        });
    } catch (error) {
        next(error)
    }
}
//export functions
export {createResturant,updateResturant,deleteResturant,getAllBranches,getSpecificResturantData,getDashBoardData}