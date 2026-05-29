import mongoose from "mongoose";

export type OrderType={
  user:mongoose.Schema.Types.ObjectId;
  restaurant:mongoose.Schema.Types.ObjectId;
  branch:mongoose.Schema.Types.ObjectId;
  deliveryAddress:string;
  subtotal:number;
  deliveryFee:number;
  totalAmount:number;
  paymentMethod:string;
  paymentStatus:string;
  orderStatus:string;
  orderItems:orderItemType[];
}
export type orderItemType={
  order:mongoose.Schema.Types.ObjectId;
  menuItem:mongoose.Schema.Types.ObjectId;
  quantity:number;
  price:number;
  itemName:string;
  variant:string;
  variantId:string;
}