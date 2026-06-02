import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type:String,
    require:true
  },
  password: {
    type:String,
    require:true
  },
phone: {
  type: String,
  required: true,
  set: (value: string) => {
    // remove spaces and dashes
    value = value.replace(/\s|-/g, "");

    // +92300xxxxxxx → 92300xxxxxxx
    if (value.startsWith("+92")) {
      return value.slice(1);
    }

    // 0300xxxxxxx → 92300xxxxxxx
    if (value.startsWith("0")) {
      return `92${value.slice(1)}`;
    }

    return value;
  }
},
  address:{
     
    type:String,
    require:true
  
  },
  role: {
    type: String,
    enum: ["user", "admin","super_admin"],
    default: "user"
  },
  restaurantId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Restaurant',
    default:null
  }
});
const User=mongoose.model('User',userSchema);
export default User;