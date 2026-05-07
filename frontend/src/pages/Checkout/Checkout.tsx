import { useEffect, useState } from "react";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    city: "",
    sector: "",
    address: "",
    paymentMethod: "COD",
  });
const {cart}=useContext(CartContext)!;
console.log(cart);

  // City → Sector mapping
  const sectorsByCity: Record<string, string[]> = {
    Islamabad: ["F-10", "G-11", "H-12"],
    Lahore: ["DHA", "Model Town"],
  };

  // Handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // If city changes → reset sector
    if (name === "city") {
      setFormData((prev) => ({
        ...prev,
        city: value,
        sector: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // 🔥 Auto-fill user data
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || "",
        name: user.name || "",
        phone: user.phone || "",
      }));
    }
  }, []);

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // 👉 send to backend here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>

      {/* Email */}
      <input
        type="email"
        name="email"
        value={formData.email}
        required
        readOnly
        placeholder="Email"
      />

      {/* Name */}
      <input
        type="text"
        name="name"
        value={formData.name}
        required
        readOnly
        placeholder="Full Name"
      />

      {/* Phone */}
      <input
        type="text"
        name="phone"
        value={formData.phone}
        required
        readOnly
        placeholder="Phone"
      />

      {/* City */}
      <select name="city" value={formData.city} onChange={handleChange} required>
        <option value="">Select City</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Lahore">Lahore</option>
      </select>

      {/* Sector (depends on city) */}
      <select
        name="sector"
        value={formData.sector}
        onChange={handleChange}
        required
        disabled={!formData.city}
      >
        <option value="">Select Sector</option>
        {formData.city &&
          sectorsByCity[formData.city].map((sec) => (
            <option key={sec} value={sec}>
              {sec}
            </option>
          ))}
      </select>

      {/* Address */}
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
        placeholder="Address"
      />

      {/* Payment Method */}
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="COD"
            checked
            readOnly
          />
          Cash on Delivery
        </label>
      </div>

      {/* Submit */}
      <button type="submit">Confirm Order</button>
    </form>
  );
};

export default CheckoutForm;