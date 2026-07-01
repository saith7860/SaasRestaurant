import mongoose, { Types } from "mongoose"

export type restaurantType={
    restaurantName:string,
    slug:string,
    restaurantImage:string,
    description:string,
    contactNumber:string,
    restaurantEmail:string,
    deliveryFee:number,
    estimatedDeliveryTime:string,
    owner:mongoose.Schema.Types.ObjectId|string
}