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
      console.log("user type", res.data.role)
      toast.success("User logged in successfully")
      if (res.data.role === "admin")
        navigate("/admin");
      else if (res.data.role == "super_admin")
        navigate("/super_admin")
      else {
        navigate("/checkout");
      }

    } catch (error) {
      console.error("Login error:", error);
      const validationErrors = handleApiError(error);

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
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-color)] text-[var(--text-color)] px-4 py-10">

      <div className="w-full max-w-md flex flex-col items-center">

        <h1 className="mb-8 text-center text-[clamp(2rem,5vw,2.75rem)] font-extrabold tracking-wide text-[var(--primary-color)]">
          Login
        </h1>

        <form
          className="w-full rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] px-6 sm:px-10 py-12 sm:py-14 shadow-2xl backdrop-blur-sm flex flex-col gap-4 transition-all duration-300"
          onSubmit={handleSubmit}
        >

          {/* Email */}
          <label htmlFor="email" className="text-sm font-medium text-[var(--text-color)]/80">
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"

            placeholder="Enter your Email"
            value={loginField.email}
            onChange={handleChange}
           className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/35 outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20"
          />

          {errors.email && (
            <p className="text-sm font-medium text-red-400">
              {errors.email}
            </p>
          )}

          {/* Password */}
          <label htmlFor="password" className="mt-2 text-sm font-medium text-[var(--text-color)]/80">
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"

            placeholder="Enter your Password"
            value={loginField.password}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/35 outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20" />

          {errors.password && (
            <p className="text-sm font-medium text-red-400">
              {errors.password}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-[var(--button-color)] py-3 text-lg font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-[0.98]"
          >
            Login
          </button>

          {/* Signup */}
          <div className="mt-4 text-center text-sm text-[var(--text-color)]/60">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-[var(--primary-color)] transition-colors duration-200 hover:text-[var(--secondary-color)]">
              Signup
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;