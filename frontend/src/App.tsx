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
import { SplashScreen } from "./components/Animation/SplashScreen";
import LandingPage from "./pages/landingpage/LandingPage";
import { applyTheme } from "./utils/applyTheme";
import SuperAdmin from "./pages/SuperAdmin/SuperAdmin";
import ProtectedSuperAdminRoute from "./components/Security/ProtectedSuperAdminRoute";
const App = () => {
  const { setRestaurantData, restaurantData } = useRestaurant();
  const [loadingRestaurant, setLoadingRestaurant] = useState(true);
  const hostname = window.location.hostname;
  console.log(hostname);
const getSlug = () => {
  const host = window.location.hostname;

  const rootDomain = import.meta.env.VITE_ROOT_DOMAIN;

  if (host === rootDomain) {
    return null;
  }

  if (host.endsWith("." + rootDomain)) {
    return host.replace("." + rootDomain, "");
  }

  return null;
};
  const getRestaurant =
    async (slug: string) => {
      try {
        setLoadingRestaurant(true);
        const response = await api.get(`/api/resturant/${slug}`);
        console.log("response in getting restaurant data", response);

        const restaurant = response.data.result;
        console.log("resturant data is", restaurant?.restaurantData?.restaurantName);

        applyTheme(restaurant?.restaurantData?.theme);
        setRestaurantData(restaurant);



      } catch (error) {
        console.log(error);
      } finally {
        setLoadingRestaurant(false);
      }
    };

 const slug = getSlug();
  useEffect(() => {
   
  if (!slug) {
    return;
  }
  
  else{
    getRestaurant(slug);
  }
  }, [slug])
  
  useEffect(() => {
    if (restaurantData?.restaurantData?.restaurantName) {
      document.title = restaurantData.restaurantData.restaurantName;
    }
    document.title=window.location.hostname.split(".")[0]
  }, [restaurantData]);
   if (!slug) {
    return <LandingPage />;
    }
  if (loadingRestaurant) {
    return <SplashScreen />;
  }

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
            <Route path="/super_admin" element={
              <ProtectedSuperAdminRoute>
                <SuperAdmin />
              </ProtectedSuperAdminRoute>
            }>
              
            </Route>
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