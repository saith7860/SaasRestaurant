import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import api from "../../api/axios";
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
      const res = await api.post(" /api/user/login", loginField);
      console.log("Login success:", res.data);
      navigate("/checkout")
      // optional: store token
      localStorage.setItem("token", res.data.token);

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={loginField.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginField.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;