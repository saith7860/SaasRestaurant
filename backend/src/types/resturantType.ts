import mongoose from "mongoose"

export type restaurantType={
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