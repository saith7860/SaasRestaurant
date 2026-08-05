import { useState } from "react";

import Navbar from "../../components/Navbar";
import MenuHero from "../../components/Menu/MenuHero";
import WhatsAppButton from "../../components/WhatsppButton";
import MenuCategories from "../../components/Menu/MenuCategories/MenuCategories";

import { useRestaurant } from "../../context/RestaurantContext";
import MenuItemsGrid from "../../components/Menu/MenuItemsGrid";
import Footer from "../../components/Footer/Footer";

const Menu = () => {
  const { restaurantData } = useRestaurant();

  const [search, setSearch] = useState("");


  const [selectedCategory, setSelectedCategory] = useState("All");


  return (
    <div className="overflow-x-hidden bg-[var(--background-color)] min-h-screen">

      <Navbar
        restaurnatName={
          restaurantData?.restaurantData?.restaurantName || null
        }
        search={search}
        setSearch={setSearch}
      />

      <MenuHero
        search={search}
        setSearch={setSearch}
      />


      {search.trim() === "" && (
        <MenuCategories
          search={search}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}


      <MenuItemsGrid
        search={search}
        selectedCategory={selectedCategory}
      />

     <Footer />
     
     <WhatsAppButton/>

    </div>
  );
};

export default Menu;