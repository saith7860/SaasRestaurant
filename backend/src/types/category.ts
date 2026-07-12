import mongoose from "mongoose";
export type CategoryType={
    category:string
    image?:string
    branchId:mongoose.Types.ObjectId;
    items?:mongoose.Types.ObjectId[];
    restaurantId:mongoose.Types.ObjectId;
}
