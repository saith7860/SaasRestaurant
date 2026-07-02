import { Request, Response, NextFunction } from "express";
import { uploadImageToCloudinary } from "../services/uploadService.js";

export const testImageUpload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const image = await uploadImageToCloudinary({
      file: req.file,
      folder: "food-ordering/test",
      width: 800,
      height: 800,
    });

    return res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: image,
    });
  } catch (error) {
    next(error);
  }
};