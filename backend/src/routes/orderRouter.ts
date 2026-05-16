import express from 'express';
const orderRouter=express.Router();
import * as orderController from '../controllers/orderController.js';
import { authMiddleware,checkAdmin } from '../tokens/jwt.js';
orderRouter.post("/create",authMiddleware,orderController.createOrder);
// orderRouter.get("/my-orders",authMiddleware,orderController.getMyOrders);
// orderRouter.get("/:id",authMiddleware,orderController.getSpecificOrder);
// orderRouter.get("/branch/:id",authMiddleware,checkAdmin,orderController.getBranchOrders);
// orderRouter.patch("/:id/status",authMiddleware,checkAdmin,orderController.updateOrderStatus);
// orderRouter.delete("/:id/delete",authMiddleware,checkAdmin,orderController.cancelOrder);
// orderRouter.get("/order/:id",orderController.getSpecificOrder);

export default orderRouter;
