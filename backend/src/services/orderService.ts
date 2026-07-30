import { ApiError } from '../middlewares/errorHandler.js';
import User from '../models/userModel.js';
import * as orderRepo from '../repos/orderRepo.js'
import { sendEmail } from "../utils/sendEmail.js";
import { getIO } from '../config/socket.js';
import { customerOrderPlacedTemplate, restaurantOrderPlacedTemplate,customerOrderStatusTemplate } from "../utils/orderEmailTemplate.js";
import Restaurant from "../models/resturantModel.js";
import { verifyOrderItems } from './verifyOrderItem.js';
import { calculateOrderTotals } from './calculateOrderTotal.js';
import Branch from '../models/branchModel.js';
const getOrdersByRestaurant=async(restaurantId:string)=>{
  const orders=await orderRepo.showAllOrders(restaurantId);
  if (!orders.length) {
    throw new ApiError(404,'Orders not found');
   }
   return orders;
}
const updateOrderStatus = async (id: string, orderStatus: string) => {
  const existingOrder = await orderRepo.findOrderById(id);

  if (!existingOrder) {
    throw new ApiError(404, "Order not found");
  }

  if (existingOrder.orderStatus === orderStatus) {
    return existingOrder;
  }

  const restaurant = await Restaurant.findById(existingOrder.restaurantId);

  if (!restaurant) {
    throw new ApiError(404, "Restaurant not found");
  }

  // If new status is delivered or cancelled, send email first then delete order
  if (orderStatus === "delivered" || orderStatus === "cancelled") {
    if (existingOrder.customerEmail) {
      sendEmail({
        to: existingOrder.customerEmail,
        subject: `Your order from ${restaurant.restaurantName} is now ${orderStatus}`,
        html: customerOrderStatusTemplate({
          restaurantName: restaurant.restaurantName,
          orderId: String(existingOrder._id),
          orderStatus: orderStatus,
          totalAmount: existingOrder.totalAmount,
        }),
      }).catch((error) => {
        console.log("Order status email failed:", error);
      });
    }

    await orderRepo.deleteOrderById(String(existingOrder._id));

    return {
      message: `Order ${orderStatus} and removed from database`,
      deleted: true,
      orderId: existingOrder._id,
      orderStatus,
    };
  }

  // Otherwise only update status
  const updatedOrder = await orderRepo.updateOrderStatus(id, orderStatus);

  if (!updatedOrder) {
    throw new ApiError(400, "Order status not updated");
  }

  if (updatedOrder.customerEmail) {
    sendEmail({
      to: updatedOrder.customerEmail,
      subject: `Your order from ${restaurant.restaurantName} is now ${updatedOrder.orderStatus}`,
      html: customerOrderStatusTemplate({
        restaurantName: restaurant.restaurantName,
        orderId: String(updatedOrder._id),
        orderStatus: updatedOrder.orderStatus,
        totalAmount: updatedOrder.totalAmount,
      }),
    }).catch((error) => {
      console.log("Order status email failed:", error);
    });
  }

  return updatedOrder;
};


const createOrder = async (userId: string, data: any) => {
  console.log(userId);
  console.log("data of order is",data);
  const findBranch=await Branch.findById(data.branchId);
  if(!findBranch){
    throw new ApiError(404,"Branch is not found");
  }
  const now=new Date();
  const timeInAsia= now.toLocaleString("en-US", { timeZone: "Asia/Karachi" ,  hour: "2-digit",
  minute: "2-digit",
  hour12: false,});
  const currentTime=timeInAsia.split(":").map(Number);
  const currentMinutes=(currentTime[0]*60)+currentTime[1];
  console.log("currentMinutes",currentMinutes);
 const [openingHours,openingMinutes]=findBranch.openingTime.split(":").map(Number);
 const openingMinutesTotal=(openingHours*60)+openingMinutes;
  console.log("openingMinutes",openingMinutesTotal);
  const [closingHour, closingMinute] =findBranch.closingTime.split(":").map(Number);
  const closingMinutesTotal =(closingHour * 60)+ closingMinute;
  console.log("closingMinutes",closingMinutesTotal);
  if(currentMinutes<openingMinutesTotal||currentMinutes>closingMinutesTotal){
    throw new ApiError(400,"Branch is closed");
  }
  const foundUser = await User.findById(userId);
  console.log(foundUser);

  if (!foundUser) {
    throw new ApiError(404, "User is not found");
  }
   // Admin should not be allowed to create order
  if (foundUser.role === "admin") {
    throw new ApiError(403, "Admin is not allowed to create orders");
  }
  if (foundUser.role === "super_admin") {
    throw new ApiError(403, "Super Admin is not allowed to create orders");
  }
  const restaurant = await Restaurant.findById(data.restaurantId);

  if (!restaurant) {
    throw new ApiError(404, "Restaurant is not found");
  }
  //check if restaurant is active
  if (!restaurant.isActive) {
    throw new ApiError(400, "Restaurant is not active");
  }
  const adminUrl = `https://${restaurant.slug}.orderva.com/admin/orders`;
  const {verifiedItems,subtotal}=await verifyOrderItems(data.orderItems);
  const {deliveryFee,totalAmount}=calculateOrderTotals(subtotal,restaurant.deliveryFee as number);
  const orderData = {
    ...data,
    orderItems: verifiedItems,
    subtotal,
    deliveryFee,
    totalAmount,
};
  const newOrder = await orderRepo.createOrder(userId, orderData);
  console.log("ORDER CREATED:", newOrder._id);
  const io=getIO();
  console.log(
 "Sending new order notification to:",
 `restaurant_${newOrder.restaurantId}`
);
io.to(`${newOrder.restaurantId}`).emit(
    "new-order",
    newOrder
);
  if (!newOrder) {
    throw new ApiError(400, "Server Error! Order not created");
  }
try {
  Promise.all([
    sendEmail({
      to: data.customerEmail,
      subject: `Your order from ${restaurant.restaurantName} is in progress`,
      html: customerOrderPlacedTemplate({
        restaurantName: restaurant.restaurantName,
        orderId: String(newOrder._id),
        totalAmount: newOrder.totalAmount,
        orderStatus: newOrder.orderStatus,
      }),
    }),

    sendEmail({
      to: restaurant.restaurantEmail,
      subject: `New order received at ${restaurant.restaurantName}`,
      html: restaurantOrderPlacedTemplate({
        restaurantName: restaurant.restaurantName,
        orderId: String(newOrder._id),
        totalAmount: newOrder.totalAmount,
        customerEmail: newOrder.customerEmail,
        deliveryAddress: newOrder.deliveryAddress,
        adminUrl:adminUrl
      }),
    }),
  ])
} catch (error) {
  console.log("Order email notification failed:", error);
}
  

  return newOrder;
};

export {createOrder,getOrdersByRestaurant,updateOrderStatus}