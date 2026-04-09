import express from 'express'
//import functions
import { getAllMenu } from '../controllers/menuController.js';
const menuRouter=express.Router();
menuRouter.get("/",getAllMenu);
export default menuRouter;