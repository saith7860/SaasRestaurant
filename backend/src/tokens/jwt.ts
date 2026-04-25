import jwt,{JwtPayload} from 'jsonwebtoken';
import { ApiError } from '../middlewares/errorHandler.js';
import { userData } from '../types/userType.js';
import { NextFunction ,Request,Response} from 'express';
interface CustomJwtPayload extends JwtPayload {
  password: string;
  email: string;
  role: string;
}
//secret
 const secret=process.env.JWT_SECRET;
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
    if (!secret) {
      throw new ApiError(500,'Bad Request!');
    }
  try {
  const decoded = jwt.verify(token, secret);
  req.user = decoded as CustomJwtPayload;

    next();
  } catch (error) {
   next(error)
  }
};


//create token
const createToken = (userData:userData) => {
  try {
    const secret=process.env.JWT_SECRET;
    if (!secret) {
      throw new ApiError(500,'Bad Request!');
    }
    return jwt.sign(userData,secret,{expiresIn:"1d"});
  } catch (error) {
    console.log("error in genterating token", error);
  }
};
const checkAdmin = (req: any, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
   throw new ApiError(401,'Admin not found')
  }
  next();
};
export { createToken, authMiddleware,checkAdmin};