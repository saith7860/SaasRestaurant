import { Routes,Route } from "react-router";
import Home from "./pages/Home/Home";
import CartPage from "./pages/Cart/CartPage";
import { CartProvider } from "./CartContext";   //Making cart functionality global so that any component can access it
const App = () => {
  return (
    <CartProvider>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<CartPage/>}/>
   </Routes>
   </CartProvider>
  )
}

export default App;