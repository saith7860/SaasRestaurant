import { Fragment, useContext, useState } from "react";
import { CartContext } from "../../CartContext";
const CartPage = () => {
  const [quantity,setQuantity]=useState(1);
  const {cart}=useContext(CartContext)!;
  
  console.log(cart);
  
  return (
    <div>
      {cart.length==0?<p>Your cart is empty</p>:cart.map((item)=>(
        <section className="mb-3" key={item.id} >
        <div>
          <img src={item.image} alt={item.name} />
        </div>
        <div>
          <h1>{item.name}</h1>
          <p>{item.variation}</p>
          <h3>Price:{item.price*item.quantity}</h3>
          <h3>Qty:{item.quantity}</h3>
        </div>
        <div>
       
        </div>
     </section>
      ))}
    </div>
  )
}

export default CartPage;