import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { ApiError } from "../middlewares/errorHandler.js";
import * as resturantRepo from '../repos/resturantRepo.js' 
import * as userRepo from '../repos/userRepo.js'    
import {CreateRestaurantBySuperAdminInput} from '../types/CreateResturant.js'
import { uploadImageToCloudinary } from "./uploadService.js";


const createRestaurantBySuperAdmin = async (
  payload: CreateRestaurantBySuperAdminInput,
  files: {logo?:Express.Multer.File[],banner?:Express.Multer.File[]}
) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
     const logoFile = files?.logo?.[0];
     const bannerFile = files?.banner?.[0];
   
     if (!logoFile && !bannerFile) {
       throw new ApiError(400, "Logo or banner image is required");
     }
 
    const {
      restaurantName,
      description,
      slug,
      restaurantEmail,
      contactNumber,
      deliveryFee,
      name,
      email,
      password,
      phone,
      address,
      theme
    } = payload;
     let logo={url:"",publicId:""}
       if (logoFile) {
       logo=await uploadImageToCloudinary({
        file:logoFile,
        folder:`food-ordering/restaurants/${restaurantName}/logo`,
        width:300,
        height:300,
        validation:{
          label:"Logo",
          minWidth:300,
          minHeight:300,
          aspectRatio:1,
          tolerance:0.5,
        },
       })
     }
     let banner={url:"",publicId:""}
     if (bannerFile) {
       banner=await uploadImageToCloudinary({
        file:bannerFile,
        folder:`food-ordering/restaurants/${restaurantName}/banner`,
        width:1600,
        height:500,
        validation:{
          label:"Banner",
          minWidth:1200,
          minHeight:400,
        },
       })
     }

    const formattedSlug = slug
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    const existingRestaurant =
      await resturantRepo.findRestaurantBySlug(
        formattedSlug,
        session
      );

    if (existingRestaurant) {
      throw new ApiError(409, "Restaurant slug already exists");
    }
       const existingRestaurantByEmail =
      await resturantRepo.findRestaurantByEmail(
        restaurantEmail,
        session
      );

    if (existingRestaurantByEmail) {
      throw new ApiError(409, "Restaurant email already exists");
    }
    const hashPassword=await bcrypt.hash(password,10)
     const ownerUser = await userRepo.createUser(
      {
        name,
        email,
        password:hashPassword,
        phone,
        address,
        role:"admin",
      },
      session
    );
    if (!ownerUser) {
        throw new ApiError(500,'User not created');
    }


  const restaurant = await resturantRepo.createRestaurant({restaurantName,description:description,slug:formattedSlug,restaurantEmail,contactNumber,deliveryFee,logo,banner,owner:ownerUser._id,theme:theme},session)
      const updatedOwner = await userRepo.updateUserRestaurantId(
      ownerUser._id,
      restaurant._id,
      session
    );
     if (!updatedOwner) {
      throw new ApiError(500,"Owner not updated");
    }

    await session.commitTransaction();

 return {
      restaurant: {
        id: restaurant._id,
        name: restaurant.restaurantName,
        description: restaurant.description,
        slug: restaurant.slug,
        email: restaurant.restaurantEmail,
        contactNumber: restaurant.contactNumber,
        deliveryFee: restaurant.deliveryFee,
        isActive: restaurant.isActive,
        owner: restaurant.owner,
      },

      owner: {
        id: updatedOwner?._id,
        name: updatedOwner?.name,
        email: updatedOwner?.email,
        phone: updatedOwner?.phone,
        address: updatedOwner?.address,
        role: updatedOwner?.role,
        restaurantId: updatedOwner?.restaurantId,
      },
    }
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export default {
  createRestaurantBySuperAdmin,
};