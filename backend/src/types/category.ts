import mongoose from "mongoose";
export type CategoryType={
    category:string
    image?:string
    branch:mongoose.Schema.Types.ObjectId;
    items:mongoose.Schema.Types.ObjectId[];
}
