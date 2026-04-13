import { Request,Response,NextFunction } from "express"
import * as categoryService from '../services/categoryService.js'
import { success } from "zod";
const getAllMenu=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const menu=await categoryService.fetchMenu();
        res.json({
            success:"true",
            data:menu
        });
    } catch (error) {
        next(error)
    }
}
const postAllMenu=async(req:Request,res:Response,next:NextFunction)=>{
try {
   await categoryService.createMenu(req.body);
    res.json({
        success:"True",
        message:"Category saved successfully"
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
    res.json({
       success:true,
       data:result
    })
} catch (error) {
    next(error)
}
}
const updateSpecificCategory=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    
}
}
const deleteSpecificCategory=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    
}
}
export {getAllMenu,postAllMenu,updateSpecificCategory,deleteSpecificCategory,getSpecificCategory}