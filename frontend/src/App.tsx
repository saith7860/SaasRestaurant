import { Routes, Route, Navigate } from "react-router";
import { ToastContainer } from "react-toastify";
import api from "./api/api";
import Home from "./pages/Home/Home";
import CartPage from "./pages/Cart/CartPage";
import { DashboardProvider } from "./context/DashBoardContext";
import { CartProvider } from "./context/CartContext";  //Making cart functionality global so that any component can access it
import Checkout from "./pages/Checkout/Checkout";
import Signup from "./pages/signup/Signup";
import Login from "./pages/Login/Login";
import DashBoardLayout from "./pages/admin/DashBoardLayout";
import Resturant from "./pages/admin/Resturant";
import Branch from "./pages/admin/Branch";
import Category from "./pages/admin/Category";
import Item from "./pages/admin/Item";
import Order from "./pages/admin/Order";
import Variant from "./pages/admin/Variant";

import { useEffect } from "react";
import { useRestaurant } from "./context/RestaurantContext";
import ProtectedAdminRoute from "./components/Security/ProtectedRoute";


import { applyTheme } from "./utils/applyTheme";


const App = () => {
  const { restaurantData, setRestaurantData } = useRestaurant();
  const hostname = window.location.hostname;
  console.log(hostname);
  const getSlug = () => {
    const parts = hostname.split(".");
    if (parts.length > 1) {
      return parts[0];
    }
    return "al-hadi";
  }
  const getRestaurant =
    async (slug: string) => {
      try {

        const response = await api.get(`/api/resturant/${slug}`);
        console.log("response in getting restaurant data",response);
        
        const restaurant = response.data.result;

        setRestaurantData(restaurant);

        applyTheme(restaurant?.theme);

        
      } catch (error) {
        console.log(error);
      }
    };


  useEffect(() => {
  const slug = getSlug();
  getRestaurant(slug);
  
   
  },[])
  
 
  // if (loadingAuth) {
  //   return (

  //     <div className="min-h-screen flex items-center justify-center bg-[var(--background-color)] text-[var(--primary-color)]">
  //       <div className="flex items-center gap-3 rounded-xl bg-[var(--card-color)] px-8 py-5 shadow-xl border border-[var(--primary-color)]/20">
  //         <div className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--primary-color)] border-t-transparent"></div>
  //         <span className="text-lg font-semibold tracking-wide">
  //           Loading...
  //         </span>
  //       </div>
  //     </div>

  //   );
  // }

  console.log(restaurantData);

  const bgColor = restaurantData?.restaurantData?.theme;

  console.log(bgColor);


  return (
    <>
      <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] transition-colors duration-300">
        
        <ToastContainer position="top-right" autoClose={3000} /><CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
              <ProtectedAdminRoute>
                <DashboardProvider>
                  <DashBoardLayout />
                </DashboardProvider>
              </ProtectedAdminRoute>
            }>
              <Route index element={<Navigate to="restaurant" replace />} />
              {/* <Route index element={<DashBoardLayout/>}/> */}
              <Route path="restaurant" element={<Resturant />} />
              <Route path="branches" element={<Branch />} />
              <Route path="categories" element={<Category />} />
              <Route path="items" element={<Item />} />
              <Route path="orders" element={<Order />} />
              <Route path="variants" element={<Variant />} />
            </Route>
          </Routes>
        </CartProvider>
      </div>
    </>
  )
}

export default App;