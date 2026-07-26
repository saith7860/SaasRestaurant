import mongoose from "mongoose";
import { imageSchema } from "./resturantModel.js";
const DealSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    },
   branchId:{
     type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required:true
   },
    title: {
        type: String,
        required: true
    },

    image: {
     type: imageSchema,
    default: {
    url: "",
    publicId: "",
  },
    },
    totalPrice: {
        type: Number,
        required: true
    },
    items: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
            required:true
        },
        variantId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Variant"
        },

        quantity: {
            type: Number,
            default: 1
        }
    }],

    isAvailable: {
        type: Boolean,
        default: true
    },

}, { timestamps: true });
export default mongoose.model("Deals", DealSchema);
