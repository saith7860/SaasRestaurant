import { Types } from "mongoose"

export type item={
   variantId: string
  name: string
  price:number
  quantity:number
  variation:string

}


export type OrderItem= {
 items:item[]
 user:Types.ObjectId
 subtotal:number
 deliveryFee:number
totalAmount: number;
 address:string
  paymentMethod: "COD" | "CARD";
  paymentStatus: "pending" | "paid";

  orderStatus:
    | "pending"
    | "confirmed"
    | "preparing"
    | "out_for_delivery"
    | "delivered"
    | "cancelled";

  createdAt?: Date;
  updatedAt?: Date;
}
