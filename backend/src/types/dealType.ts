import mongoose from "mongoose";
export type itemInDealType={
    itemId:mongoose.Types.ObjectId;
    quantity:number;
    variantId?:mongoose.Types.ObjectId;
}
export type DealType={
    title:string;
    image:{
        url:string;
        publicId:string;
    };
    totalPrice:number;
    branchId:mongoose.Types.ObjectId;
    restaurantId:string|mongoose.Types.ObjectId;
    items:itemInDealType[];
    isAvailable:boolean;
}