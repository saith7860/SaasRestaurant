import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import api from "../../api/api";
const Login = () => {
  const [loginField, setLoginField] = useState({
    email: "",
    password: ""
  });
 const navigate=useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginField({
      ...loginField,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post(" http://localhost:3000/api/user/login", loginField);
      console.log("Login success:", res.data);
      navigate("/checkout")
      // optional: store token
      localStorage.setItem("token", res.data.token);

    } catch (error) {
      console.error("Login error:", error);
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

        <label htmlFor="password" className="text-lg text-gray-300">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={loginField.password}
          onChange={handleChange}
          className="px-3 py-2 rounded-md bg-[#171219] text-white outline-none border border-gray-600 focus:border-[#984447]"
        />


            <Link to="/checkout">
              <button type="submit" className="w-full bg-[#984447] hover:bg-[#F4B400] transition text-white mt-8 py-2 rounded-md font-semibold text-lg">
                Login
              </button>
            </Link>
        

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