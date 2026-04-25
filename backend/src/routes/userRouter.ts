import express from 'express';
import {  createUser,loginUser } from '../controllers/userController.js';
import validate from '../middlewares/validationMiddleware.js';
import { loginSchemaZod, userSchemaZod } from '../validators/userValidator.js';
const UserRouter =express.Router();
UserRouter.post("/signup",validate(userSchemaZod),createUser);
UserRouter.post("/login",validate(loginSchemaZod),loginUser);
export default UserRouter;