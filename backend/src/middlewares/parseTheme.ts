import { Request,Response,NextFunction } from "express";
import { ApiError } from "./errorHandler.js";
export const parseTheme = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.theme && typeof req.body.theme === "string") {
    try {
      req.body.theme = JSON.parse(req.body.theme);
    } catch {
      return next(new ApiError(400, "Invalid theme JSON"));
    }
  }

  next();
};