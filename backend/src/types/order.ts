import mongoose from "mongoose";

export type OrderType={
  user:mongoose.Types.ObjectId;
  restaurantId:mongoose.Types.ObjectId;
  branchId:mongoose.Types.ObjectId;
  deliveryAddress:string;
  customerEmail:string
  subtotal:number;
  deliveryFee:number;
  totalAmount:number;
  paymentMethod:string;
  paymentStatus:string;
  orderStatus:string;
  orderItems:orderItemType[];
}
export type orderItemType={
  order:mongoose.Types.ObjectId;
  menuItem:mongoose.Types.ObjectId;
  quantity:number;
  price:number;
  itemName:string;
  variant:string;
  variantId:string;
}


export interface CustomerOrderPlacedTemplateData {
  restaurantName: string;
  orderId: string;
  totalAmount: number;
  orderStatus: string;
}

export interface RestaurantOrderPlacedTemplateData {
  restaurantName: string;
  orderId: string;
  totalAmount: number;
  customerEmail: string;
  deliveryAddress: string;
}