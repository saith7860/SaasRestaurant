import mongoose, { Types } from "mongoose"

export type restaurantType={
    restaurantName:string,
    slug:string,
    description:string,
    contactNumber:string,
    restaurantEmail:string,
    deliveryFee:number,
    owner:string|mongoose.Types.ObjectId
}