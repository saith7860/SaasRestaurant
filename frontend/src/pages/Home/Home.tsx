import { useState } from "react";
import Navbar from "../../components/Navbar"
import Hero from "../../components/Home/Hero/Hero";
import SearchBar from "../../components/SearchBar";
import { useRestaurant } from "../../context/RestaurantContext";
import SpecificCatogires from "../../components/Home/SpecificCatogires";
import WhatsAppButton from "../../components/WhatsppButton";
const Home = () => {
   const [search, setSearch] = useState<string>("");
   const {restaurantData}=useRestaurant();
   
  return (
    <>
    <div className="overflow-x-hidden">
     <Navbar restaurnatName={restaurantData?.restaurantData?.restaurantName||null} setSearch={setSearch}   search={search}/>
     <Hero/>
     <SearchBar search={search} setSearch={setSearch}/>
     <SpecificCatogires search={search}/>
     <WhatsAppButton/>
     {/* <Categories search={search}/> */}
    </div>
    </>
    
  )
}

export default Home;