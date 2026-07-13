import { useState } from "react";
import TrackingNav from "../../components/Home/TrackingNav.js"
import { useRestaurant } from "../../context/RestaurantContext";
import { Link, useNavigate } from "react-router";
import api from "../../api/api";
import handleApiError from "../../api/handleError";
const Signup = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
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
    const result = handleApiError(error);

            if (result?.fieldErrors) {
                setErrors(result.fieldErrors);
            }
    }
  };

  const { restaurantData } = useRestaurant();

  return (

    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">

      <TrackingNav restaurnatName={restaurantData?.restaurantData?.restaurantName || null} />

      <div className="min-h-screen w-full flex items-center justify-center bg-[var(--background-color)] text-[var(--text-color)] px-4 py-10">

        <div className="w-full max-w-md flex flex-col items-center">

          {/* Title */}
          <h1 className="mb-8 text-center text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-wide text-[var(--primary-color)]">
            Signup
          </h1>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-7 sm:p-8 shadow-2xl backdrop-blur-sm flex flex-col gap-4 transition-all duration-300"
          >

            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[var(--text-color)]/80">Name</label>
              <input
                name="name"
                value={formField.name}

                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/35 outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20"
              />
            </div>
            {
              errors.name && <p className="text-red-500">{errors.name}</p>
            }
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[var(--text-color)]/80">Email</label>
              <input
                name="email"
                type="email"
                value={formField.email}

                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/35 outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20"
              />
            </div>
            {
              errors.email && <p className="text-red-500">{errors.email}</p>
            }
            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[var(--text-color)]/80">Password</label>
              <input
                name="password"
                type="password"
                value={formField.password}

                placeholder="Enter your password"
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/35 outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20"
              />
            </div>
            {
              errors.password && <p className="text-red-500">{errors.password}</p>
            }

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[var(--text-color)]/80">Phone</label>
              <input
                name="phone"
                value={formField.phone}

                placeholder="Enter your phone number"
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/35 outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20"
              />
            </div>
            {
              errors.phone && <p className="text-red-500">{errors.phone}</p>
            }

            {/* Address */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[var(--text-color)]/80">Address</label>
              <input
                name="address"
                value={formField.address}

                placeholder="Enter your address"
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/35 outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20"
              />
            </div>
            {
              errors.address && <p className="text-sm font-medium text-red-400">{errors.address}</p>
            }

            {/* Button */}
            <button
              type="submit"
              className="mt-3 w-full rounded-lg bg-[var(--button-color)] py-3 font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-[0.98]"
            >
              Signup
            </button>

            {/* Login link */}
            <div className="mt-3 text-center text-sm text-white/60">
              Have an account?{" "}
              <Link to="/login" className="font-semibold text-[var(--primary-color)] transition-colors hover:text-[var(--secondary-color)]">
                Login
              </Link>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};

export default Signup;