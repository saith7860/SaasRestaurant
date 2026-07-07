import { useState } from "react";
import Navbar from "../../components/Home/Navbar"
import { useRestaurant } from "../../context/RestaurantContext";
import SpecificCatogires from "../../components/Home/SpecificCatogires";
import WhatsAppButton from "../../components/Home/WhatsppButton";
const Home = () => {
   const [search, setSearch] = useState<string>("");
   const {restaurantData}=useRestaurant();
   
  return (
    <>
    <div className="overflow-x-hidden">

     <Navbar restaurnatName={restaurantData?.restaurantData?.restaurantName||null} setSearch={setSearch}   search={search}/>
     <SpecificCatogires search={search}/>
     <WhatsAppButton/>
     {/* <Categories search={search}/> */}
    </div>
    </>
    
  )
}

export default Home;