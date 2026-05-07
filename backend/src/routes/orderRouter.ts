import express from 'express';
const orderRouter=express.Router();
import * as orderController from '../controllers/orderController.js';
orderRouter.post("/order/create",orderController.createOrder);
orderRouter.get("/order/my",orderController.getMyOrders);
// orderRouter.get("/order/:id",orderController.getSpecificOrder);
<<<<<<< HEAD
export default orderRouter;
=======
>>>>>>> 9ac8d36ae15c5d69d333ba659ff1a5f4babe3fb1

