import { NextFunction, Request,Response } from "express"
import * as itemService from '../services/itemService.js'
const getAllItems=async(req:Request,res:Response,next:NextFunction)=>{
    try {
     const items=await itemService.fetchAllItems();
    return   res.json({
                    success:"true",
                    data:items
                });
    } catch (error) {
        next(error)
    }
}
const postItem=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {category}=req.body.category;
    const result=await itemService.createItem(category,req.body);
    return res.json({
            success:"true",
            data:result
    })
} catch (error) {
    next(error)
}
}
const getSpecificItem=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    
}
}
const updateSpecificItem=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    
}
}
const deleteSpecificItem=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    
}
}
export {getAllItems,deleteSpecificItem,updateSpecificItem,getSpecificItem,postItem}