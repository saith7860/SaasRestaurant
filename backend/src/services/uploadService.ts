import cloudinary from "../config/cloudinary.js";
import { ApiError } from "../middlewares/errorHandler.js";
import { validateImageDimensions } from "../utils/validateImageDimensions.js";
import { ImageValidationRules } from "../types/imageUpload.js";
import { UploadImageOptions } from "../types/imageUpload.js";

export const uploadImageToCloudinary = async ({
  file,
  folder,
  width,
  height,
}: UploadImageOptions) => {
  if (!file) {
    throw new ApiError(400, "Image file is required");
  }



  const base64File = `data:${file.mimetype};base64,${file.buffer.toString(
    "base64"
  )}`;

  const result = await cloudinary.uploader.upload(base64File, {
    folder,
    resource_type: "image",
    transformation:
      width && height
        ? [
            {
              width,
              height,
              crop: "fill",
              quality: "auto",
              fetch_format: "auto",
            },
          ]
        : [
            {
              quality: "auto",
              fetch_format: "auto",
            },
          ],
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
};

export const deleteImageFromCloudinary = async (publicId?: string) => {
  if (!publicId) return;

  await cloudinary.uploader.destroy(publicId);
};