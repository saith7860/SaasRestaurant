import mongoose, { Types } from "mongoose"

export type restaurantType={
    _id:string,
    name:string,
    image:string,
    description:string,
    contactNumber:string,
    email:string,
    deliveryFee:number,
    estimatedDeliveryTime:string,
    isActive:boolean,
    owner:mongoose.Schema.Types.ObjectId
}