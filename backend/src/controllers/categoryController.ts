import { Request,Response,NextFunction } from "express"
import mongoose, { Types } from "mongoose";
import * as categoryService from '../services/categoryService.js'
import { success } from "zod";
const getAllMenu=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const menu=await categoryService.fetchMenu();
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
   await categoryService.createMenu(req.body);
   return res.json({
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
   console.log("SERVICE RESULT:", result);
   return  res.json({
       success:true,
       data:result
    })
} catch (error) {
    next(error)
}
}
// const getSpecificCategoryItems=async(req:Request,res:Response,next:NextFunction)=>{
//     try {
   
        
//         const id=req.params.id as string;
//        console.log(id);
//         const items=await categoryService.fetchItems(id);
//       return  res.json({
//             success:"true",
//             data:items
//         });
//     } catch (error) {
//         next(error)
//     }
// }
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