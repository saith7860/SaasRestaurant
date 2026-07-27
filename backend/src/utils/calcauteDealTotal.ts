import { itemInDealType } from "../types/dealType.js"
import item from "../models/itemModel.js";
import variant from "../models/variantModel.js";
import { ApiError } from "../middlewares/errorHandler.js";
export const calcauteDealTotal=async(items:itemInDealType[])=>{
 let total=0;
 for(let i=0;i<items.length;i++){
   const findItem=await item.findById(items[i].itemId);
   if(!findItem){
    throw new ApiError(404,'Item not found');
   }
   
  if(items[i].variantId){
        const findVariant=await variant.findById(items[i].variantId);
        if(!findVariant){
         throw new ApiError(404,'Variant not found');
        }
        total+=findVariant.price*items[i].quantity;
       }else{
        total+=findItem.basePrice*items[i].quantity;
       }
 }
 return total;
}