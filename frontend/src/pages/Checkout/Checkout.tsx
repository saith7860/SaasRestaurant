import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "",
  });
  const { cart } = useContext(CartContext)!;
  console.log(cart);
  //subtotal
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deilveryFee = 100;
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(formData);
    toast.success("Order is placed");
  };
  return (
    <div className="min-h-screen px-4 py-8 text-white">
      
      <h1 className="text-4xl font-black text-[#F4B400] mb-6 text-center">
          Checkout
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid  grid-cols-2 gap-10 items-start">

        {/* Checkout Form */}
        <div className=" rounded-3xl p-6 shadow-lg w-full">

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">

            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#F4B400]">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="
                w-full
                rounded-xl
                bg-[#171219]
                px-4
                py-2
                outline-none
                border border-gray-700
                focus:border-[#F4B400]
                transition
              "
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#F4B400]">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="
                w-full
                rounded-xl
                bg-[#171219]
                px-4
                py-2
                outline-none
                border border-gray-700
                focus:border-[#F4B400]
                transition
              "
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#F4B400]">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                className="
                w-full
                rounded-xl
                bg-[#171219]
                px-4
                py-2
                outline-none
                border border-gray-700
                focus:border-[#F4B400]
                transition
              "
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#F4B400]">
                Full Address
              </label>

              <textarea
                name="address"
                rows={1}
                placeholder="Enter delivery address"
                value={formData.address}
                onChange={handleChange}
                className="
                w-full
                rounded-xl
                bg-[#171219]
                px-4
                py-3
                outline-none
                border border-gray-700
                focus:border-[#F4B400]
                transition
                resize-none
              "
              />
            </div>

            {/* Payment Method */}
            <div className="flex flex-col gap-3">

              <h3 className="font-semibold text-lg text-[#F4B400]">
                Payment Method
              </h3>

              <label className="
              flex items-center gap-3
              bg-[#171219]
              border border-gray-700
              rounded-xl
              px-4 py-3
              cursor-pointer
            ">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash-on-delivery"
                  checked={
                    formData.paymentMethod === "cash-on-delivery"
                  }
                  onChange={handleChange}
                  className="accent-[#F4B400] w-4 h-4"
                />

                <span>Cash on Delivery</span>

              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
              mt-4
              bg-[#984447]
              hover:bg-[#F4B400]
              active:scale-95
              transition-all
              duration-200
              py-3
              rounded-xl
              font-bold
              text-lg
            "
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-[#2A2633] rounded-3xl p-6 my-auto shadow-lg w-full">

          <h2 className="text-2xl font-black text-[#F4B400] mb-6">
            Order Summary
          </h2>

          <div className="flex flex-col gap-4 text-lg">

            <div className="flex justify-between">
              <span className="text-gray-300">Subtotal</span>
              <span>Rs. {total}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-300">Delivery Fee</span>
              <span>Rs. {deilveryFee}</span>
            </div>

            <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl">
              <span>Total</span>
              <span className="text-[#F4B400]">
                Rs. {total + deilveryFee}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Checkout;