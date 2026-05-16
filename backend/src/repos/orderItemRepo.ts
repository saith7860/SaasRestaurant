import { orderItemType } from "../types/order.js";
import OrderItem from "../models/orderItemModel.js";
import mongoose from "mongoose";
const createOrderItem=async(id:mongoose.Types.ObjectId,data:orderItemType[])=>{
    const orderItems=data.map((item)=>{
        return {
            order:id,
            menuItem:item.menuItem,
            quantity:item.quantity,
            price:item.price,
            variant:item.variant,
            variantId:item.variantId,
            itemName:item.itemName,
        }
    })
    console.log("Order Items",orderItems);
    const newOrderItem=await OrderItem.insertMany(orderItems);
    return newOrderItem;
}
export {createOrderItem}