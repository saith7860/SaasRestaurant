import express from 'express';
const orderRouter=express.Router();
import * as orderController from '../controllers/orderController.js';
orderRouter.post("/order/create",orderController.createOrder);
orderRouter.get("/order/my",orderController.getMyOrders);
// orderRouter.get("/order/:id",orderController.getSpecificOrder);
export default orderRouter;

