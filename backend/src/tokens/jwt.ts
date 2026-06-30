import jwt,{JwtPayload} from 'jsonwebtoken';
import { ApiError } from '../middlewares/errorHandler.js';
import { userData } from '../types/userType.js';
import { NextFunction ,Request,Response} from 'express';
interface CustomJwtPayload extends JwtPayload {
  email: string;
  role: string;
  userId:string;
  restaurantId?:string;
}
//secret
 const secret=process.env.JWT_SECRET;
 const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
if (!accessTokenSecret) {
  throw new Error("ACCESS_TOKEN_SECRET is missing");
}

if (!refreshTokenSecret) {
  throw new Error("REFRESH_TOKEN_SECRET is missing");
}
//auth middleware to verify token
const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
  // Grab token from the authorization header
  const authHeader = req.headers.authorization;
   if (!authHeader) {
    throw new ApiError(401,'Auth header is missing')
  }
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
   throw new ApiError(403,'Token is missing!');
  }
    if (!accessTokenSecret) {
      throw new ApiError(500,'Bad Request!');
    }
  try {
  const decoded = jwt.verify(token, accessTokenSecret,{
    algorithms: ["HS256"],
  });
  req.user = decoded as CustomJwtPayload;

    next();
  } catch (error) {
   next(error)
  }
};
//create token
const createToken = (userData:userData) => {
  try {
    if (!accessTokenSecret) {
      throw new ApiError(500,'Bad Request!Error in creating JWT SECRET');
    }
    return jwt.sign(userData,accessTokenSecret,{expiresIn:"15min",algorithm: "HS256"});
  } catch (error) {
    console.log("error in genterating token", error);
  }
};
const createRefreshToken = (userData: userData) => {
    const payload = {
    userId: userData.userId,
    role: userData.role,
    email: userData.email,
    restaurantId: userData.restaurantId,
  };
  try {
    if (!refreshTokenSecret) {
      throw new ApiError(500,"Refresh token secret is not defined");
    }
    return jwt.sign(payload, refreshTokenSecret, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
  } catch (error) {
    console.error("Error in creating refresh token:", error);
    throw error;
  }
};
const verifyRefreshToken = (refreshToken: string) => {
  try {
    if (!refreshTokenSecret) {
      throw new ApiError(500, "Refresh token secret is not defined");
    }
    return jwt.verify(refreshToken, refreshTokenSecret, {
      algorithms: ["HS256"],
    }) as CustomJwtPayload;
  } catch (error) {
    console.error("Error in verifying refresh token:", error);
    throw error;
  }
};
const checkSuperAdmin=(req: any, res: Response, next: NextFunction) => {
  if (req.user?.role !== "super_admin") {
   throw new ApiError(401,'Only Super Admin can access this feature');
  }
  next();
}
const checkAdmin = (req: any, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
   throw new ApiError(401,'Not Authorized');
  }
  next();
};
const attachRestaurantContext = (req:any, res:Response, next:NextFunction) =>
   { 
    if (req.user?.role === "admin") {
       req.restaurant = req.user.restaurant as JwtPayload;
    } 
next(); 
};

export { createToken, authMiddleware,checkAdmin,attachRestaurantContext,checkSuperAdmin,createRefreshToken,verifyRefreshToken};