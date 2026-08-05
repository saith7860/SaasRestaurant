import { useState } from "react";
import Navbar from "../../components/Navbar"
import Hero from "../../components/Home/Hero/Hero";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import { useRestaurant } from "../../context/RestaurantContext";
import WhatsAppButton from "../../components/WhatsppButton";
import PopularItems from "../../components/Home/PopularItems/PopularItems";
import FeaturedCategories from "../../components/Home/Featured Categories/FeaturedCategories";
import BrandStrip from "../../components/Home/BrandStrip/BrandStrip";
const Menu = () => {
   const [search, setSearch] = useState<string>("");
   const {restaurantData}=useRestaurant();
   
  return (
    <>
    <div className="overflow-x-hidden">
     <Navbar restaurnatName={restaurantData?.restaurantData?.restaurantName||null} setSearch={setSearch}   search={search}/>
     <Hero/>
     <BrandStrip />
     <SearchBar search={search} setSearch={setSearch}/>
     <PopularItems search={search} />
     <FeaturedCategories />
     <WhatsAppButton/>
    </div>
    </>
    
  )
}

export default Menu;