import mongoose from "mongoose";
const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String
    },
    description: {
      type: String,
    },
    basePrice:{
      type:Number
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    variants: [
      {
        variation: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }, // adds createdAt & updatedAt automatically
);

const Item = mongoose.model("Item", itemSchema);
export default Item;
