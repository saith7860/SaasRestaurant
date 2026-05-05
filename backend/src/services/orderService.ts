import { ApiError } from '../middlewares/errorHandler.js';
import User from '../models/userModel.js';
import * as orderRepo from '../repos/orderRepo.js'
import { OrderItem } from '../types/order.js';
const fetchAllOrders=async()=>{
   const orders=await orderRepo.showAllOrders();
   if (!orders.length) {
    throw new ApiError(404,'Items not found');
   }
   return orders;
}
//UPDATE ITEM
// const getSpecificOrder=async(id:string,data:OrderItem)=>{
// const getOrder=await orderRepo.updateItemByName(id,data);
// if (!update) {
//    return new ApiError(400,'Server Error! Item not updated');
// }
// return update;
// }

const createOrder=async(userId:string,data:OrderItem)=>{
   console.log(userId);
   
   const foundUser=await User.findOne({_id:userId});
   console.log(foundUser);
   
   if (!foundUser) {
    throw new ApiError(404,'User is not found')
   }
   const newOrder=await orderRepo.createOrder(data);
   return newOrder;
}

export {fetchAllOrders,createOrder}