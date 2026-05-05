
import { useContext } from "react";
import { CartContext } from "../../CartContext";
const Checkout = () => {
    const {cart}=useContext(CartContext)!;
    console.log(cart);
    
  return (
    <div>Checkout</div>
  )
}

export default Checkout;