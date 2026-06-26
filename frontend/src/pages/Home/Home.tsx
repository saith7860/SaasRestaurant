import { useState } from "react";
import Navbar from "../../components/Home/Navbar"
import { useRestaurant } from "../../context/RestaurantContext";
import SpecificCatogires from "../../components/Home/SpecificCatogires";
const Home = () => {
   const [search, setSearch] = useState<string>("");
   const {restaurantData}=useRestaurant();
  return (
    <>
     <Navbar restaurnatName={restaurantData?.restaurantData?.name ||null} setSearch={setSearch}   search={search}/>
     <SpecificCatogires search={search}/>
     {/* <Categories search={search}/> */}
    </>
    
  )
}

export default Home;