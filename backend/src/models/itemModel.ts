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
      type:Number,
      default:0
    },
    categoryId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Category',
      required:true
    },
    restaurantId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Resturant',
      required:true
    },
    branchId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Branch',
      required:true
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    variants: [
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Variant",
      }
    ],
  },
  { timestamps: true }, // adds createdAt & updatedAt automatically
);

const Item = mongoose.model("Item", itemSchema);
export default Item;
