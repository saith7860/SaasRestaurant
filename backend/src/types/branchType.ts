import mongoose from "mongoose";
export type branchType={
    restaurant:string;
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