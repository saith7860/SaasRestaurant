import multer from "multer";
import { ApiError } from "./errorHandler.js";

const storage = multer.memoryStorage();

const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
  ];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    return cb(new ApiError(400, "Only JPG, PNG and WEBP images are allowed"));
  }

  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
});

export const uploadSingleImage = upload.single("image");

export const uploadRestaurantImages = upload.fields([
  {
    name: "logo",
    maxCount: 1,
  },
  {
    name: "banner",
    maxCount: 1,
  },
]);