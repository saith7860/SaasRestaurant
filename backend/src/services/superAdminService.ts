import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { ApiError } from "../middlewares/errorHandler.js";
import * as resturantRepo from '../repos/resturantRepo.js' 
import * as userRepo from '../repos/userRepo.js'    
interface CreateRestaurantBySuperAdminInput {
  restaurantName: string;
  description: string;
  slug: string;
  restaurantEmail: string;
  contactNumber: string;
  deliveryFee: number;
  estimatedDeliveryTime: string;
  owner:mongoose.Schema.Types.ObjectId
  name:string
  email:string
  password:string
  phone:string
  address:string
  role:string
}

const createRestaurantBySuperAdmin = async (
  payload: CreateRestaurantBySuperAdminInput
) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const {
      restaurantName,
      description,
      slug,
      restaurantEmail,
      contactNumber,
      deliveryFee,
      estimatedDeliveryTime,
      owner,
      name,
      email,
      password,
      phone,
      address,
      role
    } = payload;


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
  const restaurant = await resturantRepo.createRestaurant({restaurantName,description:description,slug:formattedSlug,restaurantEmail,contactNumber,deliveryFee,estimatedDeliveryTime,owner:ownerUser._id},session)
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
        estimatedDeliveryTime: restaurant.estimatedDeliveryTime,
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