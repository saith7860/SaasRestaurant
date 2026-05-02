import { Routes,Route } from "react-router";
import Home from "./pages/Home/Home";
import CartPage from "./pages/Cart/CartPage";
import { CartProvider } from "./CartContext";   //Making cart functionality global so that any component can access it
import Checkout from "./pages/Checkout/Checkout";
const App = () => {
  return (
    <CartProvider>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
   </Routes>
   </CartProvider>
  )
}

export default App;