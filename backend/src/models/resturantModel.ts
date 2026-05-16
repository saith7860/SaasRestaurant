import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image:{
    type:String
  },
  description: String,

  contactNumber: {
    type:String,
    required:true
  },

  email: {
    type:String,
    required:true
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
  slug:{
    type:String,
    required:true,
    unique:true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true
  }

}, { timestamps: true });
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;