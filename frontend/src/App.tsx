import { Routes,Route } from "react-router";
import Home from "./pages/Home/Home";
import CartPage from "./pages/Cart/CartPage";

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<CartPage/>}/>
   </Routes>
  )
}

export default App;