import express from 'express';
const orderItemRouter=express.Router();
import * as orderItemController from '../controllers/orderItemController.js';
import { authMiddleware,checkAdmin } from '../tokens/jwt.js';
orderItemRouter.post("/",authMiddleware,checkAdmin,orderItemController.createOrderItem);
orderItemRouter.get("/:id",authMiddleware,orderItemController.getSpecificOrderItem);
orderItemRouter.patch("/:id",authMiddleware,checkAdmin,orderItemController.updateOrderItem);

