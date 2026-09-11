import { useState } from "react";
import Navbar from "../../components/Navbar"
import Hero from "../../components/Home/Hero/Hero";
import { useRestaurant } from "../../context/RestaurantContext";
import FeaturedCategories from "../../components/Home/Featured Categories/FeaturedCategories";
import WhatsAppButton from "../../components/WhatsppButton";
import Footer from "../../components/Footer/Footer";
import DealsGrid from "../../components/Deals/DealsGrid";
import DealDrawer from "../../components/Deals/DealDrawer";
import DealHeader from "../../components/Deals/DealHeader";
import type { Deals } from "../../types/DashBoardtype";
const Home = () => {
  //  const [search, setSearch] = useState<string>("");
   const {restaurantData}=useRestaurant();
     const [selectedDeal, setSelectedDeal] = useState<Deals | null>(null);
   
  return (
    <>
    <div className="overflow-x-hidden pt-15">
     <Navbar restaurnatName={restaurantData?.restaurantData?.restaurantName||null}/>
     <Hero/>
     
     <FeaturedCategories />
         <div className="relative mx-auto max-w-7xl px-4">
        <DealHeader/>
     <DealsGrid onSelectDeal={setSelectedDeal}/>
     </div>
     {selectedDeal && (
        <DealDrawer
          deal={selectedDeal}
          onClose={() => setSelectedDeal(null)}
        />
      )}
     <Footer />
     <WhatsAppButton/>
    </div>
    </>
    
  )
}

export default Home;