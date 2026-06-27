import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useRestaurant } from "../../context/RestaurantContext";
import OrderForm from "../../components/Order/OrderForm";
import OrderSummary from "../../components/Order/OrderSummary";
import type { CartItem } from "../../types/CartType";
const Checkout = () => {
  const { restaurantData } = useRestaurant();  

  const [formData, setFormData] = useState({
    customerEmail:"",
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
  const orderData={...formData,subtotal,deliveryFee,totalAmount}
  
  return (
    <div className="min-h-screen px-4 py-8 text-white">
    <OrderForm formData={formData} handleChange={handleChange} total={subtotal} orderData={orderData} />
    <OrderSummary deliveryFee={deliveryFee} total={subtotal}/>
    </div>
  )
};
export default Checkout;