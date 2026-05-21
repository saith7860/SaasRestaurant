import { Request,Response ,NextFunction } from "express";
import * as variantService from '../services/variantService.js'

const postVariant=async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const result=await variantService.postVariant(req.body);
    return res.json({
      success: "true",
      message:"Variant created successfully",
      data:result
    });
  } catch (error) {
    next(error);
  }
}
const getSpecificVariant=async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const result=await variantService.getSpecificVariant(req.params.id as string);
    return res.json({
      success: "true",
      message:"Variant fetched successfully",
      data:result
    });
  } catch (error) {
    next(error);
  }
}
const updateSpecificVariant=async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const result=await variantService.updateSpecificVariant(req.params.id as string,req.body);
    return res.json({
      success: "true",
      message:"Variant updated successfully",
      data:result
    });
  } catch (error) {
    next(error);
  }
}
const deleteSpecificVariant=async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const result=await variantService.deleteSpecificVariant(req.params.id as string);
    return res.json({
      success: "true",
      message:"Variant deleted successfully",
      data:result
    });
  } catch (error) {
    next(error);
  }
}
export {postVariant,getSpecificVariant,updateSpecificVariant,deleteSpecificVariant}