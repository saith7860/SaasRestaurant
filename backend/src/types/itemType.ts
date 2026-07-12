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
    categoryId:mongoose.Schema.Types.ObjectId;
    description:string
    variants?:mongoose.Schema.Types.ObjectId[];
    restaurantId:string
    basePrice:number;
    branchId:mongoose.Schema.Types.ObjectId;
    isAvailable:boolean;
}