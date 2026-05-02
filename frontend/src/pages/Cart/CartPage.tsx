import {  useContext } from "react";
import { Plus ,Minus,Trash2} from "lucide-react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router";
const CartPage = () => {
  const {cart,setCart}=useContext(CartContext)!;
  const decreaseQty=(itemId:string)=>{
  const updatedCart = cart
    .map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0); // remove if 0

  setCart(updatedCart);

    
  }
  //Total amount 
  const total = cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
   const increaseQty=(itemId:string)=>{
    const updatedCart = cart.map((item) =>
    item.id === itemId
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  setCart(updatedCart);
    
  }
  const removeItem=(itemId:string)=>{
    const updatedCart = cart.filter(
    (item) =>
      !(item.id === itemId)
  );

  setCart(updatedCart);
  }
  console.log(cart);
  
  return (
    <div>
      {cart.length==0?
      <p>Your cart is empty</p>:
      cart.map((item)=>(
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
           <div className="flex items-center gap-2">
          {/* Decrese quantity by 1 */}
          <button onClick={() => decreaseQty(item.id)}>
            <Minus/>
          </button>

          <span>{item.quantity}</span>
        {/* Increase quantity by 1 */}
          <button onClick={() => increaseQty(item.id)}>
            <Plus/>
          </button>
          {/*Remove itemm from cart  */}
          <button
          onClick={() => removeItem(item.id)}
          className=""
        >
          <Trash2/>
        </button>
        </div>
     </section>
      ))}
    {cart.length>0 && (
      <>
       <h2>Total: {total}</h2>
       <Link to={"/checkout"}><button>Proceed To Checkout</button></Link>
       </>
       )}

    </div>
  )
}

export default CartPage;