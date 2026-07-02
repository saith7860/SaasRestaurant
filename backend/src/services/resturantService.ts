import { restaurantType } from "../types/resturantType.js";
import * as resturantRepo from "../repos/resturantRepo.js"
import * as branchRepo from "../repos/branchRepo.js"
import * as categoryRepo from "../repos/categoryRepo.js";
import { ApiError } from "../middlewares/errorHandler.js";
import * as itemRepo from "../repos/itemRepo.js";
import * as orderRepo from '../repos/orderRepo.js';
import {
  uploadImageToCloudinary,
  deleteImageFromCloudinary,
} from "./uploadService.js";

interface RestaurantImageFiles {
  logo?: Express.Multer.File[];
  banner?: Express.Multer.File[];
}

const updateRestaurantImages = async (
  adminId: string,
  files: RestaurantImageFiles
) => {
  const restaurant = await resturantRepo.findRestaurantByOwner(adminId);

  if (!restaurant) {
    throw new ApiError(404, "Restaurant not found for this admin");
  }

  const updateData: any = {};

  const logoFile = files?.logo?.[0];
  const bannerFile = files?.banner?.[0];

  if (!logoFile || !bannerFile) {
    throw new ApiError(400, "Logo or banner image is required");
  }

  if (logoFile) {
    await deleteImageFromCloudinary(restaurant.logo?.publicId);

    const logo = await uploadImageToCloudinary({
      file: logoFile,
      folder: `food-ordering/restaurants/${restaurant.slug}/logo`,
      width: 300,
      height: 300,
    });

    updateData.logo = logo;
  }

  if (bannerFile) {
    await deleteImageFromCloudinary(restaurant.banner?.publicId);

    const banner = await uploadImageToCloudinary({
      file: bannerFile,
      folder: `food-ordering/restaurants/${restaurant.slug}/banner`,
      width: 1600,
      height: 500,
    });

    updateData.banner = banner;
  }

  const updatedRestaurant = await resturantRepo.updateResturant(
    restaurant._id.toString(),
    updateData
  );

  return updatedRestaurant;
};

const getDashBoardData=async(id:string)=>{
    console.log(id);
    debugger;
    const resuturant=await resturantRepo.getDashBoardData(id);
        if (!resuturant) {
        throw new ApiError(404,"Resturant not found")
    }
    const branches=await branchRepo.getAllBranches(id);
    if (!branches) {
        throw new ApiError(404,"Branches not found")
    }
    const category=await categoryRepo.getAllCategoriesOfResturant(id);
    if (!category) {
        throw new ApiError(404,"Categories not found")
    }
    
    const items=await itemRepo.showAllItems(id);
    if (!items) {
        throw new ApiError(404,"Items not found")
    }
   const orders=await orderRepo.showAllOrders(id)
    if (!orders) {
        throw new ApiError(404,"Orders not found")
    }
    
    return {resuturant,branches,category,items,orders}
}
const updateResturant=async(id:string,data:restaurantType)=>{
    const updateResturant=await resturantRepo.updateResturant(id,data);
    if (!updateResturant) {
        throw new ApiError(400,"Resturant not updated")
    }
    return updateResturant
}
const deleteResturant=async(id:string)=>{
    const deleteResturant=await resturantRepo.deleteResturant(id);
    if (!deleteResturant) {
        throw new ApiError(400,"Resturant not deleted")
    }
    return deleteResturant
}
const getProfile=async(id:string)=>{
    const getProfile=await resturantRepo.getProfile(id);
    if (!getProfile) {
        throw new ApiError(404,"Resturant not found")
    }
    return getProfile
}
const getAllBranches=async(id:string)=>{
    const getAllBranches=await resturantRepo.getAllBranches(id);
    if (!getAllBranches) {
        throw new ApiError(404,"Resturant not found")
    }
    return getAllBranches
} 
const getSpecificResturantData=async(slug:string)=>{
    const restaurantData=await resturantRepo.getSpecificResturantData(slug);
    if (!restaurantData) {
        throw new ApiError(404,"Resturant not found")
    }
    const branches=await branchRepo.getAllBranches(restaurantData._id as any);//typescript giving issues here
    if (!branches) {
        throw new ApiError(404,"Branches not found")
    }
    const category=await categoryRepo.getAllCategoriesOfResturant(restaurantData._id as any);//typescript giving issues here
    if (!category) {
        throw new ApiError(404,"Category not found");
    }
    const items=await itemRepo.showAllItems(restaurantData._id as any);//typescript giving issues here
    if (!items) {
        throw new ApiError(404,"Items not found");
    }
    return {restaurantData,branches,category,items}
}
export {updateRestaurantImages,updateResturant,deleteResturant,getProfile,getAllBranches,getSpecificResturantData,getDashBoardData}