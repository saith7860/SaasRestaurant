import { useState } from "react";
import { Link,useNavigate } from "react-router";
import api from "../../api/axios";
const Signup = () => {
  const [formField, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });
const navigate=useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formField,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(formField);
    
    try {
      const res = await api.post(" /api/user/signup", formField);
      console.log("User created:", res.data);
      navigate("/checkout")

    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white gap-2 py-5">
      <h1 className="text-4xl font-black text-[#F4B400] pt-5 pb-8" >Signup</h1>

      <form
          className="bg-[#2A2633] mx-auto px-10 pt-6 pb-3 flex flex-col gap-3 rounded-md w-full max-w-md "
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-gray-300">Name</label>
            <input 
              id="name" 
              type="text" 
              name="name" 
              value={formField.name} 
              onChange={handleChange}
              className="px-3 py-1 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formField.email}
              onChange={handleChange}
              className="px-3 py-1 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
              placeholder="Enter your email"  
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-300">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formField.password}
              onChange={handleChange}
              className="px-3 py-1 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
              placeholder="Create a password"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm text-gray-300">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formField.phone}
              onChange={handleChange}
              className="px-3 py-1 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1">
            <label htmlFor="address" className="text-sm text-gray-300">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              value={formField.address}
              onChange={handleChange}
              className="px-3 py-1 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
              placeholder="Enter your address"
            />
          </div>

          {/* Button */}
          
          <Link to={"/checkout"}>
            <button
              type="submit"
              className="w-full bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 rounded-md font-semibold"
              >
              Signup
            </button>
          </Link>

          {/* Login link */}
          <div className="text-md text-gray-400 text-center">
            Have an account?{" "}
            <Link to="/login" className="text-[#F4B400] hover:underline">
              Login
            </Link>
          </div>
        </form>

    </div>
  );
};

export default Signup;