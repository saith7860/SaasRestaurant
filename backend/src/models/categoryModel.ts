import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
   category: {
      type: String,
      unique:true,
      trim:true,
      required: true
    },
    image: {
     type: String
    },
  items: [
   {type:mongoose.Schema.Types.ObjectId,
      ref:'Item'
    }
  ],
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);
const Category=mongoose.model("Category",categorySchema);
export default Category;