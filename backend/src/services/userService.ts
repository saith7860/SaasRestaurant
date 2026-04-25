import { ApiError } from "../middlewares/errorHandler.js";
import { userType, loginUserType } from "../types/userType.js";
import * as userRepo from "../repos/userRepo.js";
import bcrypt from "bcryptjs";
import { createToken } from "../tokens/jwt.js";
const saltRounds = 10;
const createUser = async (data: userType) => {
  const { password, email } = data;

  const checkEmailExists = await userRepo.isEmailExists(email);
  if (checkEmailExists) {
    throw new ApiError(409, "Email alrady exists");
  } else {
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await userRepo.create({ ...data, password: hashPassword });
    if (!newUser) {
      throw new ApiError(500, "Interval Server Error!User not created");
    }
    return newUser;
  }
};
const loginUser = async (data: loginUserType) => {
    const {email,password}=data;
    const findUser=await userRepo.isEmailExists(email);
 if (!findUser || !findUser.password ||!findUser.email) {
  throw new ApiError(401,"Invalid credentials");
}
  const isMatch= await bcrypt.compare(password,findUser.password);
  if (isMatch) {
    //created payload
    const payload={
      email:findUser.email,
      password:findUser.password
    }
    //generate token
    const token= createToken(payload)
    if (token) {
      return token;
    }
    throw new ApiError(500,'Error in generating token');
  }
  throw new ApiError(401,'Password does not match')
};
export { createUser, loginUser };
