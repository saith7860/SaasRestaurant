import sharp from "sharp";
import { ApiError } from "../middlewares/errorHandler.js";

interface ValidateImageOptions {
  file: Express.Multer.File;
  label: string;
  minWidth: number;
  minHeight: number;
  aspectRatio?: number;
  tolerance?: number;
}

export const validateImageDimensions = async ({
  file,
  label,
  minWidth,
  minHeight,
  aspectRatio,
  tolerance = 0.4,
}: ValidateImageOptions) => {
  const metadata = await sharp(file.buffer).metadata();

  const width = metadata.width;
  const height = metadata.height;

  if (!width || !height) {
    throw new ApiError(400, `${label} image dimensions could not be detected`);
  }

  if (width < minWidth || height < minHeight) {
    throw new ApiError(
      400,
      `${label} image must be at least ${minWidth}x${minHeight}px`
    );
  }

  if (aspectRatio) {
    const uploadedRatio = width / height;
    const difference = Math.abs(uploadedRatio - aspectRatio);

    if (difference > tolerance) {
      throw new ApiError(
        400,
        `${label} image ratio is not suitable. Please upload a better fitted image.`
      );
    }
  }

  return true;
};