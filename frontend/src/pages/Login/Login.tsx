import { useState } from "react";
import { Link, useNavigate } from "react-router";
import handleApiError from "../../api/handleError.js";
import { toast } from "react-toastify";
import api from "../../api/api";
import { setAccessToken } from "../../api/tokenStore.js";
const Login = () => {
  const [loginField, setLoginField] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginField({
      ...loginField,
      [e.target.name]: e.target.value
    });
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/user/login", loginField);
      console.log("Login success:", res.data);
      setAccessToken(res.data.token);
      console.log("user type",res.data.role)
      toast.success("User logged in successfully")
      if(res.data.role === "admin")
      navigate("/admin");
      else if(res.data.role=="super_admin")
      navigate("/super_admin")
      else{
        navigate("/checkout");
      }
    
    } catch (error) {
      console.error("Login error:", error);
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

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4 overflow-hidden">

      <div className="w-full max-w-md flex flex-col items-center">

        <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-black text-[#F4B400] mb-8 text-center">
          Login
        </h1>

        <form
          className="bg-[#2A2633] w-full px-6 sm:px-10 py-16 sm:py-20 flex flex-col gap-3 rounded-lg overflow-hidden shadow-lg"
          onSubmit={handleSubmit}
        >

          {/* Email */}
          <label htmlFor="email" className="text-lg text-gray-300">
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
          
            placeholder="Enter your Email"
            value={loginField.email}
            onChange={handleChange}
            className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email}
            </p>
          )}

          {/* Password */}
          <label htmlFor="password" className="text-lg text-gray-300 mt-2">
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"
    
            placeholder="Enter your Password"
            value={loginField.password}
            onChange={handleChange}
            className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
          />

          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#984447] hover:bg-[#F4B400] transition text-white mt-6 py-2 rounded-md font-semibold text-lg"
          >
            Login
          </button>

          {/* Signup */}
          <div className="text-md text-gray-400 text-center mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#F4B400] hover:underline">
              Signup
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;