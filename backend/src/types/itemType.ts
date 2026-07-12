import mongoose, { mongo } from "mongoose";
export type variantType={
    itemId:string
    variation:string
    price:number
}
export type ItemType={
    name:string
    image:{
        url:string
        publicId:string
    }
    categoryId:mongoose.Types.ObjectId;
    description:string
    variants?:mongoose.Types.ObjectId[];
    restaurantId:string
    basePrice:number;
    branchId:mongoose.Types.ObjectId;
    isAvailable:boolean;
}