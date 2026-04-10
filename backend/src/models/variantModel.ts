import mongoose from "mongoose";
const variantSchema = new mongoose.Schema(
  {
   name: {
      type: String,
      required: true
    },
    price:{
        type:Number
    },
    Item:[
    {type:'ObjectId',
      ref:'Item'
    }
    ]
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);
const Variant=mongoose.model("Variant",variantSchema);
export default Variant;