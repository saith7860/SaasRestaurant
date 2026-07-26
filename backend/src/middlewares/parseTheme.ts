import { Request,Response,NextFunction } from "express";
import { ApiError } from "./errorHandler.js";
export const parseTheme = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.theme && req.body.socialLinks && typeof req.body.theme === "string") {
    try {
      req.body.theme = JSON.parse(req.body.theme);
      req.body.socialLinks = JSON.parse(req.body.socialLinks);
    } catch {
      return next(new ApiError(400, "Invalid theme or socialLinks JSON"));
    }
  }

  next();
};