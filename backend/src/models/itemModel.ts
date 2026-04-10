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
    isAvailable: {
      type: Boolean,
      default: true,
    },
    variants: [{ type: "ObjectId", ref: "Variant" }],
    category: [{ type: "ObjectId", ref: "Category" }],
  },
  { timestamps: true }, // adds createdAt & updatedAt automatically
);
// itemSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });
const Item = mongoose.model("Item", itemSchema);
export default Item;
