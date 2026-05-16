import mongoose from "mongoose";
export type branchType={
    restaurant:mongoose.Schema.Types.ObjectId;
    name:string;
    address:string;
    city:string;
    location:{lat:number,lng:number};
    contactNumber:string;
    openingTime:string;
    closingTime:string;
    deliveryFee:number;
    isOpen:boolean;
}