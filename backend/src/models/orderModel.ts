import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
   orderType:{
    type:String
   },
    items: [
      {
        variantId:String,
        name: String,
        price: Number,
        quantity: Number,
        variation:String
      },
    ],
   address:{
    city:{
    type:String
  },
    street:{
    type:String
    }
    
   },
    subtotal: {
      type: Number,
      required: true,
    },

    deliveryFee: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "CARD"],
      default: "COD",
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },

    orderStatus: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "preparing",
        "out_for_delivery",
        "delivered",
        "cancelled",
      ],
      default: "pending",
    },
  },
  { timestamps: true }
);
orderSchema.pre("save", function (next) {
  this.totalAmount = this.subtotal + this.deliveryFee;
});
const Order=mongoose.model("Order", orderSchema);
export default Order;
