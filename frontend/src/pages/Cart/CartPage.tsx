import { useContext } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";
import { getAccessToken } from "../../api/tokenStore";
const CartPage = () => {
  const { cart, setCart } = useContext(CartContext)!;
  const token = getAccessToken();
const checkoutRoute = token ? "/checkout" : "/signup?redirect=/checkout";
  const decreaseQty = (itemId: string) => {
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
  const increaseQty = (itemId: string) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);

  }
  const removeItem = (itemId: string) => {
    const updatedCart = cart.filter(
      (item) =>
        !(item.id === itemId)
    );

    setCart(updatedCart);
  }
  console.log(cart);

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] px-4 py-8 sm:px-6 lg:px-8">
      {cart.length == 0 ?
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-center text-2xl font-bold tracking-wide text-[var(--primary-color)]">Your cart is empty!</p>
        </div> :
        cart.map((item) => (
          <section key={item.id} className="mb-5 flex flex-col gap-5 rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-6 shadow-xl transition-all duration-300 hover:border-[var(--primary-color)]/40 hover:shadow-2xl sm:flex-row sm:items-center sm:justify-between">

            <div>
              <img className="hidden h-24 w-24 rounded-xl object-cover border border-white/10 sm:block" src={item.image} alt={item.name} />
            </div>

            <div className="">
              <h1 className="text-xl font-bold text-[var(--primary-color)]">{item.name}</h1>
              <p className="text-sm text-[var(--text-color)]/70">{item.variation}</p>
              <h3 className="mt-2 text-sm text-[var(--text-color)]/90">Price:{item.price * item.quantity}</h3>
              <h3 className="mt-2 text-sm text-[var(--text-color)]/90">Qty:{item.quantity}</h3>
            </div>

            <div className="flex items-center justify-end gap-1  ">
              {/* Decrese quantity by 1 */}
              <button className="rounded-lg bg-[var(--button-color)] p-2 text-[var(--button-text-color)] shadow transition-all duration-200 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95" onClick={() => decreaseQty(item.id)}>
                <Minus />
              </button>

              <span className="min-w-8 text-center text-lg font-semibold">{item.quantity}</span>

              {/* Increase quantity by 1 */}
              <button className="rounded-lg bg-[var(--button-color)] p-2 text-[var(--button-text-color)] shadow transition-all duration-200 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95" onClick={() => increaseQty(item.id)}>
                <Plus />
              </button>
            
              {/*Remove itemm from cart  */}
              <button
                onClick={() => removeItem(item.id)}
                className="ml-3 rounded-lg p-2 text-red-400 transition-colors duration-200 hover:bg-red-500/10 hover:text-red-300"              >
                <Trash2 />
              </button>
            </div>

          </section>))}

      {cart.length > 0 && (
        <>
          <h2 className="mt-8 text-right text-3xl font-bold text-[var(--primary-color)]">Total: {total}</h2>

          <Link to={checkoutRoute}><button className="w-[clamp(200px,50%,300px)] block text-center bg-[#984447] text-white font-bold mx-auto mt-5 py-2 px-2 rounded-sm hover:bg-[#F4B400] transition">Proceed To Checkout</button></Link>
        </>
      )}

         <Link to="/"><button className="mx-auto mt-6 block w-[clamp(220px,50%,320px)] rounded-xl bg-[var(--button-color)] px-6 py-3 text-center font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-[0.98]">Return to Menu</button></Link>

    </div>

  )
}

export default CartPage;