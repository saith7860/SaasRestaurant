import { ApiError } from '../middlewares/errorHandler.js';
import * as itemRepo from '../repos/itemRepo.js'
import type { ItemType } from '../types/itemType.js';
import { uploadImageToCloudinary } from './uploadService.js';
import * as resturantRepo from "../repos/resturantRepo.js";
import { deleteOldImage } from '../config/cloudinary.js';
// const getAllItems=async(id:string)=>{
//    const items=await itemRepo.getAllItems(id);
//    if (!items) {
//     throw new ApiError(404,'Items not found');
//    }
//    return items;
// }
const updateSpecItem=async(id:string,data:ItemType,file?: Express.Multer.File)=>{
    const restaurant = await resturantRepo.findRestaurantByOwner(data.restaurantId as string);
   if (!restaurant) {
    throw new ApiError(404, "Restaurant not found");
  }
  const item=await itemRepo.findById(id);
  if (!item) {
   throw new ApiError(404,"Item not found");
  }
if (file) {

    if (item.image?.publicId) {
        await deleteOldImage(item.image.publicId);
    }

    const newImage = await uploadImageToCloudinary({
        file,
        folder: `food-ordering/restaurants/${restaurant.slug}/items`,
    });

    data.image = {
        url: newImage.url,
        publicId: newImage.publicId,
    };
}

  const update=await itemRepo.updateItem(id,data);

if (!update) {
   return new ApiError(400,'Server Error! Item not updated');
}
return update;
}

//Delete item
const deleteSpecificItem=async(id:string)=>{
const del=await itemRepo.deleteItem(id);
if (!del) {
   throw new ApiError(400,'Server Error! Item not Deleted');
}
return del;
}
//create item
const createItem=async(categoryid:string,itemData:ItemType,file?: Express.Multer.File,restaurantId?:string)=>{
   console.log("category id is ",categoryid);
   console.log("item data is",itemData);
    
   
   const foundCategoryId=await itemRepo.getSpecificCategoryId(categoryid);
   console.log("found category id is ",foundCategoryId);
   
   if (!foundCategoryId) {
    throw new ApiError(404,'Cateogory is not found')
   }
   const restaurant = await resturantRepo.findRestaurantByOwner(restaurantId as string);
   if (!restaurant) {
    throw new ApiError(404, "Restaurant not found");
  }
   const findItem=await itemRepo.getItemByNameAndRestaurant(itemData.name,restaurant._id);
   if (findItem) {
    throw new ApiError(400,'Item already exists');
   }
  
   let image = {
    url: "",
    publicId: "",
  };

  if (file) {
    image = await uploadImageToCloudinary({
      file,
      folder: `food-ordering/restaurants/${restaurant.slug}/items`,
    });
  }
    console.log("image is ",image);
   const newItem = await itemRepo.createItem({
    ...itemData,
    basePrice:Number(itemData.basePrice),
    categoryId:foundCategoryId._id,
    restaurantId:restaurant._id,
    image:image,
  });
   if(!newItem){
    throw new ApiError(500,'Server Error! Item not created')
   }
   foundCategoryId.items.push(newItem._id);
   await foundCategoryId.save();
   return newItem;
}

export {createItem,updateSpecItem,deleteSpecificItem}