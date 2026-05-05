import { NextFunction, Request, Response } from "express";
import * as orderService from '../services/orderService.js';
type Params={
  id:string
}
// const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const items = await itemService.fetchAllItems();
//     return res.json({
//       success: "true",
//       data: items,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);

    const result = await orderService.createOrder(req.body.id, req.body);
    return res.json({
      success: "true",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getMyOrders =async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result=await orderService.fetchAllOrders();
    return res.json({
      success: "true",
      data: result,
    });
  } catch (error) {
    next(error)
  }
};
// const updateSpecificItem = async(req: Request<Params>, res: Response,next:NextFunction) => {
//   try {
//     const {id}=req.params;
//     const data:ItemType=req.body;
//     const updateItem=await itemService.updateSpecItem(id,data);
//     return res.json({
//       success: "true",
//       data: updateItem,
//     });
    
//   } catch (error) {
//     console.log('error in updating specific item',error);
//     next(error);
    
//   }
// };
// const getSpecificOrder =async (req: Request<Params>, res: Response,next:NextFunction) => {
//   try {
// const {id}=req.params;
//    const result=await orderService.getSpecificOrder(id);
//     return res.json({
//       success: "true",
//       data: result,
//     });
//   } catch (error) {
//     next(error)
//   }
// };
export {
createOrder,getMyOrders
};
 