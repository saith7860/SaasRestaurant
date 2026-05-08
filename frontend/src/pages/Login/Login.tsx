import { useState } from "react";
import { Link, useNavigate } from "react-router";
import handleApiError from "../../api/handleError.js";
import { toast } from "react-toastify";
import api from "../../api/api";
const Login = () => {
  const [loginField, setLoginField] = useState({
    email: "",
    password: ""
  });
   const [errors, setErrors] =useState<Record<string, string>>({});
 const navigate=useNavigate();
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
      navigate("/checkout")
      // optional: store token
      localStorage.setItem("token", res.data.token);
      toast.success("User logged in successfully")
    } catch (error) {
      console.error("Login error:", error);
       const validationErrors =
        handleApiError(error);

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
    <div className="flex flex-col justify-center items-center h-screen text-white gap-2 py-5">
      <h1 className="text-4xl font-black text-[#F4B400] pt-5 pb-8">Login</h1>

      <form
        className="bg-[#2A2633] mx-auto px-10 py-24 flex flex-col gap-3 rounded-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="text-lg text-gray-300">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={loginField.email}
          onChange={handleChange}
          className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
        />
 {
            errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email}
              </p>
            )
          }
        <label htmlFor="password" className="text-lg text-gray-300">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={loginField.password}
          onChange={handleChange}
          className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
        />
        
 {
            errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password}
              </p>
            )
          }
        
              <button type="submit" className="w-full bg-[#984447] hover:bg-[#F4B400] transition text-white mt-8 py-2 rounded-md font-semibold text-lg">
                Login
              </button>
        
        

          {/* Signup link */}
          <div className="text-md text-gray-400 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#F4B400] hover:underline">
              Signup
            </Link>
          </div>

      </form>
    </div>
  );
};

export default Login;