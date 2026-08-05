import { useState } from "react";
import Navbar from "../../components/Navbar"
import Hero from "../../components/Home/Hero/Hero";
import { useRestaurant } from "../../context/RestaurantContext";
import WhatsAppButton from "../../components/WhatsppButton";
import PopularItems from "../../components/Home/PopularItems/PopularItems";
import FeaturedCategories from "../../components/Home/Featured Categories/FeaturedCategories";
import BrandStrip from "../../components/Home/BrandStrip/BrandStrip";
const Home = () => {
   const [search, setSearch] = useState<string>("");
   const {restaurantData}=useRestaurant();
   
  return (
    <>
    <div className="overflow-x-hidden">
     <Navbar restaurnatName={restaurantData?.restaurantData?.restaurantName||null} setSearch={setSearch}   search={search}/>
     <Hero/>
     <BrandStrip />
     <FeaturedCategories />
     <PopularItems search={search} />
     <WhatsAppButton/>
    </div>
    </>
    
  )
}

export default Home;