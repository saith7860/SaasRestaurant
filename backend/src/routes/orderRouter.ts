import express from 'express';
const orderRouter=express.Router();
import * as orderController from '../controllers/orderController.js';
import validate from '../middlewares/validationMiddleware.js';
import { createOrderSchema } from "../validators/orderValidator.js";
import { authMiddleware,checkAdmin,attachRestaurantContext } from '../tokens/jwt.js';
orderRouter.post("/create",authMiddleware,validate(createOrderSchema),orderController.createOrder);
orderRouter.get("/admin/orders",authMiddleware,checkAdmin,attachRestaurantContext,orderController.getOrdersByRestaurant);
orderRouter.patch("/update-order-status",authMiddleware,checkAdmin,attachRestaurantContext,orderController.updateOrderStatus);
// orderRouter.get("/my-orders",authMiddleware,orderController.getMyOrders);
// orderRouter.get("/:id",authMiddleware,orderController.getSpecificOrder);
// orderRouter.get("/branch/:id",authMiddleware,checkAdmin,orderController.getBranchOrders);
// orderRouter.patch("/:id/status",authMiddleware,checkAdmin,orderController.updateOrderStatus);
// orderRouter.delete("/:id/delete",authMiddleware,checkAdmin,orderController.cancelOrder);
// orderRouter.get("/order/:id",orderController.getSpecificOrder);

export default orderRouter;
