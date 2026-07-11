import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
   category: {
      type: String,
      trim:true,
      required: true
    },
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true
    },
  items: [
   {type:mongoose.Schema.Types.ObjectId,
      ref:'Item'
    }
  ],
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);
categorySchema.index(
  {
    restaurantId: 1,
    category: 1,
  },
  {
    unique: true,
  }
);
const Category=mongoose.model("Category",categorySchema);
export default Category;