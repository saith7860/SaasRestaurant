import { Request,Response,NextFunction } from "express";
import { ApiError } from "../middlewares/errorHandler.js";
export const parseItemDeals=(req:Request,res:Response,next:NextFunction) => {
    if(req.body.items){
        try {
            req.body.items=JSON.parse(req.body.items)
            
        } catch (error) {
            throw new ApiError(400,"Invalid items data")
        }
    }
    next()
}