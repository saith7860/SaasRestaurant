// import { NextFunction, Request, Response } from "express";
// import * as orderItemService from "../services/orderItemService.js";
// const createOrderItem=async(req:Request,res:Response,next:NextFunction)=>{
//     try {
//         const result=await orderItemService.createOrderItem(req.body);
//         return res.json({
//             success:"true",
//             message:"Order item created successfully",
//             result
//         });
//     } catch (error) {
//         next(error)
//     }
// }
// export {createOrderItem}