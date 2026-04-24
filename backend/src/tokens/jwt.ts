import jwt from 'jsonwebtoken';
const createToken = (userData:string) => {
  try {
    const secret=process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('Bad Request!Secret not found');
    }
    return jwt.sign(userData,secret);
  } catch (error) {
    console.log("error in genterating token", error);
  }
};
export { createToken };