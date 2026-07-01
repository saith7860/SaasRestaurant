import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true
  },
  restaurnatImage:{
    type:String,
    // required:true
  },
  description: {
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

restaurantEmail: {
  type: String,
  required: true,
  unique: true,
  lowercase: true,
  trim: true,
},

  deliveryFee: {
    type: Number,
    default: 0
  },

  estimatedDeliveryTime: {
    type:String,
  },

  isActive: {
    type: Boolean,
    default: true
  },
slug: {
  type: String,
  required: true,
  unique: true,
  lowercase: true,
  trim: true,
},
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true,
    unique:true
  }

}, { timestamps: true });
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;