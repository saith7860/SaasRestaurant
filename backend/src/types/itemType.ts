import mongoose from "mongoose";
export type variantType={
    itemId:string
    variation:string
    price:number
}
export type ItemType={
    name:string
    image:string
    categoryId:mongoose.Schema.Types.ObjectId;
    description:string
    variants?:mongoose.Schema.Types.ObjectId[];
    isAvailable:boolean
}