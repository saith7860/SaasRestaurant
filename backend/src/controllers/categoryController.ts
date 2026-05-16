import { Request,Response,NextFunction } from "express"
import mongoose, { Types } from "mongoose";
import * as categoryService from '../services/categoryService.js'
import { success } from "zod";
const getAllMenu=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id as string;
        const menu=await categoryService.fetchMenu(id);
       return res.json({
            success:"true",
            data:menu
        });
    } catch (error) {
        next(error)
    }
}
const postAllMenu=async(req:Request,res:Response,next:NextFunction)=>{
try {
   const category= await categoryService.createMenu(req.body);
   return res.json({
        success:"True",
        message:"Category saved successfully",
        data:category

    });
} catch (error) {
    next(error);
}
}
const getSpecificCategory=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const category=req.query.category as string;
    console.log(category);
    
   const result=await categoryService.getSpecificCategory(category);
   console.log("SERVICE RESULT:", result);
   return  res.json({
       success:true,
       data:result
    })
} catch (error) {
    next(error)
}
}
const updateSpecificCategory=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const id=req.params.id as string;
    const category=await categoryService.updateCategory(id,req.body);
    return res.json({
        success:true,
        message:"Category updated successfully",
        data:category
    });
} catch (error) {
    next(error)
}
}
const deleteSpecificCategory=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const id=req.params.id as string;
    const category=await categoryService.deleteCategory(id);
    return res.json({
        success:true,
        message:"Category deleted successfully",
        data:category
    });
} catch (error) {
    next(error)
}
}
export {getAllMenu,postAllMenu,updateSpecificCategory,deleteSpecificCategory,getSpecificCategory}