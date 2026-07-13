import mongoose, { Types } from "mongoose"
import { Theme } from "./Theme.js"
export type restaurantType={
    restaurantName:string,
    slug:string,
    description:string,
    contactNumber:string,
    restaurantEmail:string,
    deliveryFee:number,
    owner:string|mongoose.Types.ObjectId
    theme?:Theme
}