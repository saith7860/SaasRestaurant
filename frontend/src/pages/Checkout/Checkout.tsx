import { useContext, useState } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";
import { useRestaurant } from "../../context/RestaurantContext";
import OrderForm from "../../components/Order/OrderForm";
import OrderSummary from "../../components/Order/OrderSummary";
import type { CartItem } from "../../types/CartType";
const Checkout = () => {
  const { restaurantData } = useRestaurant();

  const [formData, setFormData] = useState({
    customerEmail: "",
    restaurantId: restaurantData?.restaurantData._id,
    branchId: restaurantData?.branches[0]._id,
    deliveryAddress: "",
    paymentMethod: "",
  });
  const { cart } = useContext(CartContext)!;

  console.log(cart);
  //subtotal
  const subtotal = cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);
  const deliveryFee = restaurantData?.restaurantData.deliveryFee;
  const totalAmount = subtotal + deliveryFee;
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const orderData = { ...formData, subtotal, deliveryFee, totalAmount }

  return (
    <div className="h-screen bg-[var(--background-color)] text-[var(--text-color)] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-3xl font-extrabold tracking-wide text-[var(--primary-color)] sm:text-4xl">
        Checkout
      </h1>

      <div
        className=" mx-auto  mt-12 flex  flex-col  items-center  justify-center  gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-10 lg:max-w-7xl    " >   
        
        <div className="w-full">
     
          <OrderForm
            formData={formData}
            handleChange={handleChange}
            orderData={orderData}
          />

        </div>

        <div className="w-full max-w-xl lg:max-w-none lg:w-full">
          <OrderSummary
            deliveryFee={deliveryFee}
            total={subtotal}
          />
        </div>

      </div>


      <Link to="/"><button className="mx-auto mt-16 block w-[clamp(220px,50%,320px)] rounded-xl bg-[var(--button-color)] px-6 py-3 text-center font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-[0.98]">Return to Menu</button></Link>

    </div>

  )
};
export default Checkout;