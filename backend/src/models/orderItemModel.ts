import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    menuItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    price: {
      type: Number,
      required: true,
    },

    variation: {
      type: String,
    },

    variantId: {
      type: String,
    },

    itemName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

export default OrderItem;