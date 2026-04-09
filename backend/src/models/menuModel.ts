import mongoose from "mongoose";
const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true,
      index: true // 🔥 fast filtering
    },

    description: String,

    variants: [
      {
        name: String,   // small, medium, large
        price: Number
      }
    ],

    image: String,

    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);
const Menu=mongoose.model("Menu",menuSchema);
export default Menu;