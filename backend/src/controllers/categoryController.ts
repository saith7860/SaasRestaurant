import { Request,Response,NextFunction } from "express"
import * as categoryService from '../services/categoryService.js'
const getAllMenu=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const menu=await categoryService.fetchMenu();
        res.json(menu);
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
const getSpecificCategory=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    
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