import mongoose from "mongoose";
export type branchType={
    restaurant:string;
    name:string;
    address:string;
    city:string;
    contactNumber:string;
    openingTime:string;
    closingTime:string;
    deliveryFee:number;
    isOpen:boolean;
}