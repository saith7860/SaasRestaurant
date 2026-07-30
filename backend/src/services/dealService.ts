import { DealType } from "../types/dealType.js"
import * as dealRepo from '../repos/dealRepo.js'
import * as resturantRepo from '../repos/resturantRepo.js'
import { ApiError } from "../middlewares/errorHandler.js"
import { uploadImageToCloudinary } from './uploadService.js'
import {deleteOldImage} from "../config/cloudinary.js"
import { calcauteDealTotal } from "../utils/calcauteDealTotal.js"
export const createDeal=async(deal:DealType,file?:Express.Multer.File,restaurantId?:string)=>{
  const restaurant=await resturantRepo.findRestaurantByOwner(restaurantId as string);
  if (!restaurant) {
   throw new ApiError(404,'Restaurant not found');
  }
  const findDeal=await dealRepo.getDealByNameAndResturant(deal.title,restaurantId as string);
  if (findDeal) {
   throw new ApiError(400,'Deal already exists');
  }
  let image={
    url:"",
    publicId:"",
  }
  if (file) {
    image=await uploadImageToCloudinary({
      file,
      folder:`food-ordering/restaurants/${restaurant.slug}/deals`,
    });
  }
  const totalPrice=await calcauteDealTotal(deal.items);
  const newDeal=await dealRepo.createDeal({
    ...deal,
    image:image,
    restaurantId:restaurant._id,
    totalPrice:totalPrice,
  });
  if (!newDeal) {
   throw new ApiError(500,'Server Error! Deal not created');
  }
  return newDeal;
}
export const getAllDeals=async(restaurantId:string)=>{
  const deals=await dealRepo.getAllDeals(restaurantId);
  if (!deals) {
   throw new ApiError(404,'Deals not found');
  }
  return deals;
}
export const getSpecificDeal=async(id:string)=>{
  const deal=await dealRepo.getSpecificDeal(id);
  if (!deal) {
   throw new ApiError(404,'Deal not found');
  }
  return deal;
}
export const updateSpecificDeal=async(id:string,deal:DealType,file?:Express.Multer.File)=>{
  const restaurant=await resturantRepo.findRestaurantByOwner(deal.restaurantId as string);
  if (!restaurant) {
   throw new ApiError(404,'Restaurant not found');
  }

  let image={
    url:deal.image?.url,
    publicId:deal.image?.publicId,
  } 
  if (file) {
    if(deal.image?.publicId){
      await deleteOldImage(deal.image.publicId);
    }
    image=await uploadImageToCloudinary({
      file,
      folder:`food-ordering/restaurants/${restaurant.slug}/deals`,
    });
  }
  deal.image=image;
  deal.restaurantId=restaurant._id;
   const update=await dealRepo.updateSpecificDeal(id,deal);
   if (!update) {
    throw new ApiError(500,'Server Error! Deal not updated');
   }
   return update;
}
export const deleteSpecificDeal=async(id:string)=>{
    const del=await dealRepo.deleteSpecificDeal(id);
    if (!del) {
        throw new ApiError(500,'Server Error! Deal not deleted');
    }
    return del;
}