import mongoose from "mongoose";
export type CategoryType={
    category:string
    image?:string
    branchId:mongoose.Schema.Types.ObjectId;
    items?:mongoose.Schema.Types.ObjectId[];
    restaurantId:mongoose.Schema.Types.ObjectId;
}
