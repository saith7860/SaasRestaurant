import { useState } from "react";
import Categories from "../../components/Home/Categories";
import Navbar from "../../components/Home/Navbar"
import { useRestaurant } from "../../context/RestaurantContext";
import SpecificCatogires from "../../components/Home/SpecificCatogires";
const Home = () => {
   const [search, setSearch] = useState<string>("");
   const {restaurantData}=useRestaurant();
  return (
    <>
     <Navbar restaurnatName={restaurantData?.restaurantData?.name ||null} setSearch={setSearch}   search={search}/>
     <SpecificCatogires/>
     
    </>
    
  )
}

export default Home;