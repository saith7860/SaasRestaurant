import express from 'express'
//import functions
import { getAllMenu,postAllMenu } from '../controllers/menuController.js';
const menuRouter=express.Router();
menuRouter.get("/",getAllMenu);
menuRouter.post("/",postAllMenu);
export default menuRouter;