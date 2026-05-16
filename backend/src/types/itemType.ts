import mongoose from "mongoose";
type variant={
    variation:string
    price:number
}
export type ItemType={
    name:string
    image:string
    category:mongoose.Schema.Types.ObjectId;
    branch:mongoose.Schema.Types.ObjectId;
    description:string
    variants:variant[];
    isAvailable:boolean
}