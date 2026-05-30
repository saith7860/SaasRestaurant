import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../../api/api";
import handleApiError from "../../api/handleError";
const Signup = () => {
  const [errors,setErrors]=useState<Record<string,string>>({});
  const [formField, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formField,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();
    console.log(formField);

    try {
      const res = await api.post("/api/user/signup", formField);
      console.log("User created:", res.data);
      navigate("/login")

    } catch (error) {
      console.error("Signup error:", error);
      const validationErrors=handleApiError(error);

  if (validationErrors) {

    const formattedErrors:
      Record<string, string> = {};

    validationErrors.forEach(
      (err: any) => {

        formattedErrors[err.field] =
          err.message;
      }
    );

    setErrors(formattedErrors);
  }
    }
  };
console.log(errors);

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white overflow-hidden">

      <div className="w-full max-w-md flex flex-col items-center px-4">

        {/* Title */}
        <h1 className="text-[clamp(1.8rem,4vw,2.5rem)] font-black text-[#F4B400] mb-6 text-center">
          Signup
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-[#2A2633] p-6 sm:p-7 flex flex-col gap-3 rounded-md shadow-lg"
        >

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Name</label>
            <input
              name="name"
              value={formField.name}
             
              placeholder="Enter your name"
              onChange={handleChange}
              className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
            />
          </div>
          {
            errors.name && <p className="text-red-500">{errors.name}</p>
          }
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              value={formField.email}
          
              placeholder="Enter your email"
              onChange={handleChange}
              className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
            />
          </div>
    {
            errors.email && <p className="text-red-500">{errors.email}</p>
          }
          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Password</label>
            <input
              name="password"
              type="password"
              value={formField.password}
             
              placeholder="Enter your password"
              onChange={handleChange}
              className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
            />
          </div>
            {
            errors.password && <p className="text-red-500">{errors.password}</p>
          }

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Phone</label>
            <input
              name="phone"
              value={formField.phone}
              
              placeholder="Enter your phone number"
              onChange={handleChange}
              className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
            />
          </div>
            {
            errors.phone && <p className="text-red-500">{errors.phone}</p>
          }

          {/* Address */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Address</label>
            <input
              name="address"
              value={formField.address}
       
              placeholder="Enter your address"
              onChange={handleChange}
              className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
            />
          </div>
            {
            errors.address && <p className="text-red-500">{errors.address}</p>
          }

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 rounded-md font-semibold"
          >
            Signup
          </button>

          {/* Login link */}
          <div className="text-sm text-gray-400 text-center mt-2">
            Have an account?{" "}
            <Link to="/login" className="text-[#F4B400] hover:underline">
              Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;