import { Request,Response,NextFunction } from "express";
import Item from "../models/itemModel.js";
import { ApiError } from "../middlewares/errorHandler.js";
import { deleteOldImage } from "../config/cloudinary.js";
export const validateImageUpload=async(req:Request,res:Response,next:NextFunction)=>{
const id = req.params.id;
const item = await Item.findById(id);
if (!item) {
    throw new ApiError(404,"Item not found")
}
if (req.file) {
    const {url,publicId}=item.image;
    // Delete old image
    await deleteOldImage(item?.image?.publicId);
    // Upload new image
    item.image = {
        url,
        publicId
    };
}

// Otherwise keep the existing image

await item?.save();
next();
}