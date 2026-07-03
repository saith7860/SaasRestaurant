import mongoose from "mongoose";
const branchSchema = new mongoose.Schema({

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },

  name: {
    type:String,
    required:true,
    unique:true
  },

  address: {
    type:String,
    required:true
  },

  city: {
    type:String,
    required:true
  },

contactNumber: {
  type: String,
  required: true,
  set: (value: string) => {

    value = value.replace(/\s|-/g, "");

    if (value.startsWith("+92")) {
      return value.slice(1);
    }

    if (value.startsWith("0")) {
      return `92${value.slice(1)}`;
    }

    return value;
  }
},

  openingTime: {
    type:String,
    required:true
  },

  closingTime: {
    type:String,
    required:true
  },

  deliveryFee: {
    type:Number,
    required:true
  },

  isOpen: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });
const Branch = mongoose.model("Branch", branchSchema);
export default Branch;