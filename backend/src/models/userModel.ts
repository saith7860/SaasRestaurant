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
    type:String,
    require:true
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