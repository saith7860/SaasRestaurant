import mongoose from "mongoose";
export const orderItemSchema = new mongoose.Schema(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },

    itemName: {
      type: String,
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

    variation: String,

    variantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Variant",
    },
  },
  { _id: false }
);
