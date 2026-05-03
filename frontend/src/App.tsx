import { Routes,Route } from "react-router";
import Home from "./pages/Home/Home";
import CartPage from "./pages/Cart/CartPage";
import { CartProvider } from "./CartContext";   //Making cart functionality global so that any component can access it
import Checkout from "./pages/Checkout/Checkout";
import Signup from "./pages/signup/Signup";
import Login from "./pages/Login/Login";
const App = () => {
  return (
    <CartProvider>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </CartProvider>
  )
}

export default App;