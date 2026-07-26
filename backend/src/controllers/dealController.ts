import {Request,Response,NextFunction} from 'express';
import { DealType } from '../types/dealType.js';
import * as dealService from '../services/dealService.js'
export const createDeal=async(req:Request,res:Response,next:NextFunction)=>{
    try { 
        const restuatntId=req.user?.restaurantId;
        if (req.body.items) {
        req.body.items = JSON.parse(req.body.items);
        }
        const deal=await dealService.createDeal(req.body,req.file,restuatntId as string);
        return res.status(201).json({success:true,message:'Deal created successfully',deal});
    } catch (error) {
        next(error)
    }
}
export const getAllDeals=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const restaurantId=req.user?.restaurantId as string;
        const deals=await dealService.getAllDeals(restaurantId);
        return res.status(200).json({success:true,message:'Deals fetched successfully',deals});
    } catch (error) {
        next(error)
    }
}
export const getSpecificDeal=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const deal=await dealService.getSpecificDeal(req.params.id as string);
        return res.status(200).json({success:true,message:'Deal fetched successfully',deal});
    } catch (error) {
        next(error)
    }
}
export const updateSpecificDeal=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const deal=await dealService.updateSpecificDeal(req.params.id as string,req.body,req.file);
        return res.status(200).json({success:true,message:'Deal updated successfully',deal});
    } catch (error) {
        next(error)
    }
}
export const deleteSpecificDeal=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const deal=await dealService.deleteSpecificDeal(req.params.id as string);
        return res.status(200).json({success:true,message:'Deal deleted successfully',deal});
    } catch (error) {
        next(error)
    }
}