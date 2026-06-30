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

import { useEffect, useState } from "react";
import { useRestaurant } from "./context/RestaurantContext";
import ProtectedAdminRoute from "./components/Security/ProtectedRoute";
import { setAccessToken } from "./api/tokenStore";
const App = () => {
  const { restaurantData, setRestaurantData } = useRestaurant();
  const [loadingAuth, setLoadingAuth] = useState(true);
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

        const response =
          await api.get(
            `/api/resturant/${slug}`
          );

        setRestaurantData(
          response.data.result
        );

      } catch (error) {
        console.log(error);
      }
    };
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.post("/api/user/refresh-token");
        setAccessToken(res.data.token);
      } catch (err) {
        console.log("No valid session");
      } finally {
        setLoadingAuth(false);
      }
    };
    checkAuth();

    const slug = getSlug();
    getRestaurant(slug);
  }, [])

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#171219] text-[#F4B400] text-xl font-bold">
        Loading...
      </div>
    );
  }

  console.log(restaurantData);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <CartProvider>
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
    </>
  )
}

export default App;