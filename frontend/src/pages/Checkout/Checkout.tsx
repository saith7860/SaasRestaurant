import { useContext,useState } from "react";
import { CartContext } from "../../CartContext";
import { toast } from "react-toastify";
const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "",
  });
    const {cart}=useContext(CartContext)!;
    console.log(cart);
    //subtotal
  const total = cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
const deilveryFee=100;
    const handleChange = (e:any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e:any) => {
    e.preventDefault();

    console.log(formData);
    toast.success("Order is placed");
  };
  return (
    <>
    <div><form onSubmit={handleSubmit}>

      {/* Full Name */}
      <div>
        <label>Full Name</label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div>
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Phone */}
      <div>
        <label>Phone Number</label>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      {/* Address */}
      <div>
        <label>Full Address</label>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      {/* Payment Method */}
      <div>
        <h3>Payment Method</h3>

        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="cash-on-delivery"
            checked={
              formData.paymentMethod === "cash-on-delivery"
            }
            onChange={handleChange}
          />

          Cash on Delivery
        </label>

      </div>

      {/* Submit */}
      <button type="submit">
        Place Order
      </button>

    </form></div>
    <div>
       <h2>Order Summary</h2>
       <h3>Subtotal:Rs.{total}</h3>
       <h3>Delivery Fee:Rs.{deilveryFee}</h3>
       <h3>Total:Rs.{total+deilveryFee}</h3>
    </div>
    

  </>
  )
}

export default Checkout;