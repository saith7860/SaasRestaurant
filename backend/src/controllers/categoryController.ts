import { Request,Response,NextFunction } from "express"
import * as categoryService from '../services/categoryService.js'
const getAllMenu=(req:Request,res:Response,next:NextFunction)=>{
    try {
        const menu=categoryService.fetchMenu();
        res.json(menu);
    } catch (error) {
        next(error)
    }
}
const postAllMenu=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    
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