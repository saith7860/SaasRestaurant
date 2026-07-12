import mongoose from "mongoose";
export const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      default: "",
    },
    publicId: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);
const themeSchema = new mongoose.Schema(
  {
    primaryColor: {
      type: String,
      default: "#F4B400",
    },
    secondaryColor: {
      type: String,
      default: "#984447",
    },
    backgroundColor: {
      type: String,
      default: "#171219",
    },
    cardColor: {
      type: String,
      default: "#2A2633",
    },
    textColor: {
      type: String,
      default: "#FFFFFF",
    },
    buttonColor: {
      type: String,
      default: "#984447",
    },
    buttonTextColor: {
      type: String,
      default: "#FFFFFF",
    },
  },
  { _id: false }
);
const restaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true
  },
   logo: {
      type: imageSchema,
      default: {
        url: "",
        publicId: "",
      },
    },

    banner: {
      type: imageSchema,
      default: {
        url: "",
        publicId: "",
      },
    },
  description: {
    type:String,
    required:true
  },
  theme: {
      type: themeSchema,
      default: {},
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