import { useState } from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import DealsHero from "../../components/Deals/DealsHero";
import DealsGrid from "../../components/Deals/DealsGrid";
import DealDrawer from "../../components/Deals/DealDrawer";
import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsppButton";
import Footer from "../../components/Footer/Footer";

export interface Deal {
  id: string;
  title: string;
  image: string;
  totalPrice: number;
  isAvailable: boolean;
  items: {
    itemId: string;
    itemName: string;
    itemImage: string;
    variants: {
      id: string;
      variation: string;
      price: number;
    }[];
  }[];
}

const DealsPage = () => {



  const [search, setSearch] = useState<string>("");
  const { restaurantData } = useRestaurant();

  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">

      <Navbar restaurnatName={restaurantData?.restaurantData?.restaurantName || null} setSearch={setSearch} search={search} />

      <DealsHero />

      <DealsGrid onSelectDeal={setSelectedDeal} />

      {selectedDeal && (
        <DealDrawer
          deal={selectedDeal}
          onClose={() => setSelectedDeal(null)}
        />
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DealsPage;