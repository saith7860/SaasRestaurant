import { useState } from "react";
import axios from "axios";
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
    <div className="flex flex-col">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit} method="POST">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formField.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formField.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formField.password}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formField.phone}
          onChange={handleChange}
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formField.address}
          onChange={handleChange}
        />

        <button type="submit">Signup</button>
        <div>Have an Account
          <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;