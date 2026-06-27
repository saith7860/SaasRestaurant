import { ApiError } from '../middlewares/errorHandler.js';
import User from '../models/userModel.js';
import * as orderRepo from '../repos/orderRepo.js'
import * as orderItemRepo from '../repos/orderItemRepo.js';
import { sendEmail } from "../utils/sendEmail.js";
import { customerOrderPlacedTemplate, restaurantOrderPlacedTemplate } from "../utils/orderEmailTemplate.js";
import Restaurant from "../models/resturantModel.js";
import { OrderType } from '../types/order.js';
// import { OrderItem } from '../types/order.js';
// const fetchAllOrders=async()=>{
//    const orders=await orderRepo.showAllOrders();
//    if (!orders.length) {
//     throw new ApiError(404,'Items not found');
//    }
//    return orders;
// }
const getOrdersByRestaurant=async(restaurantId:string)=>{
  const orders=await orderRepo.showAllOrders(restaurantId);
  if (!orders.length) {
    throw new ApiError(404,'Orders not found');
   }
   return orders;
}
const updateOrderStatus=async(id:string,orderStatus:string)=>{
  const updatedOrder=await orderRepo.updateOrderStatus(id,orderStatus);
  if (!updatedOrder) {
    throw new ApiError(400,'Server Error! Order not updated');
  }
  return updatedOrder;
}
//UPDATE ITEM
// const getSpecificOrder=async(id:string,data:OrderItem)=>{
// const getOrder=await orderRepo.updateItemByName(id,data);
// if (!update) {
//    return new ApiError(400,'Server Error! Item not updated');
// }
// return update;
// }

const createOrder = async (userId: string, data: OrderType) => {
  console.log(userId);

  const foundUser = await User.findById(userId);
  console.log(foundUser);

  if (!foundUser) {
    throw new ApiError(404, "User is not found");
  }

  const restaurant = await Restaurant.findById(data.restaurantId);

  if (!restaurant) {
    throw new ApiError(404, "Restaurant is not found");
  }

  const newOrder = await orderRepo.createOrder(userId, data);

  if (!newOrder) {
    throw new ApiError(400, "Server Error! Order not created");
  }

  Promise.all([
    sendEmail({
      to: data.customerEmail,
      subject: `Your order from ${restaurant.name} is in progress`,
      html: customerOrderPlacedTemplate({
        restaurantName: restaurant.name,
        orderId: String(newOrder._id),
        totalAmount: newOrder.totalAmount,
        orderStatus: newOrder.orderStatus,
      }),
    }),

    sendEmail({
      to: restaurant.email,
      subject: `New order received at ${restaurant.name}`,
      html: restaurantOrderPlacedTemplate({
        restaurantName: restaurant.name,
        orderId: String(newOrder._id),
        totalAmount: newOrder.totalAmount,
        customerEmail: newOrder.customerEmail,
        deliveryAddress: newOrder.deliveryAddress,
      }),
    }),
  ]).catch((error) => {
    console.log("Order email notification failed:", error);
  });

  return newOrder;
};

export {createOrder,getOrdersByRestaurant,updateOrderStatus}