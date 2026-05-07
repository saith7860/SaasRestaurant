import { Types } from "mongoose"

export type item={
   variantId: string
  name: string
  price:number
  quantity:number
  variation:string

}
type address={
  city:string,
  street:string
}

export type OrderItem= {
 items:item[]
 address:address
 user:Types.ObjectId
 subtotal:number
 deliveryFee:number
totalAmount: number;
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
