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
    <div className="p-5 text-white">
      {cart.length==0?
      <div className="">
        <p className="text-[#F4B400] text-lg sm:text-xl font-black">Your cart is empty!</p>
      </div>:
      cart.map((item)=>(
        <section key={item.id}  className="bg-[#984447] flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 px-10 rounded-lg mb-4 gap-3">


            <div>
              <img className="hidden sm:block" src={item.image} alt={item.name} />
            </div>
            <div className="">
              <h1 className="text-[#F4B400] font-black text-lg sm:text-xl">{item.name}</h1>
              <p>{item.variation}</p>
              <h3>Price:{item.price*item.quantity}</h3>
              <h3>Qty:{item.quantity}</h3>
            </div>
            <div className="flex items-center gap-2 ">
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
        </section> ))}

    {cart.length>0 && (
      <>
       <h2 className="m-auto mt-4 text-[#F4B400] text-2xl font-bold text-right">Total: {total}</h2>

       <Link to={"/signup"}><button className="w-[clamp(200px,50%,300px)] block text-center bg-[#984447] text-white font-bold mx-auto mt-5 py-2 px-6 rounded-sm hover:bg-[#F4B400] transition">Proceed To Checkout</button></Link>
       </>
       )}

      <Link to="/"><button className=" w-[clamp(200px,50%,300px)]  block text-center bg-[#984447] text-white font-bold mx-auto mt-5 py-2 px-6 rounded-sm hover:bg-[#F4B400] transition">Return to Menu</button></Link>

    </div>
    
  )
}

export default CartPage;