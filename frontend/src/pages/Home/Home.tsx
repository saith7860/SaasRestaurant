import { useState } from "react";
import Navbar from "../../components/Navbar"
import Hero from "../../components/Home/Hero/Hero";
import { useRestaurant } from "../../context/RestaurantContext";
import FeaturedCategories from "../../components/Home/Featured Categories/FeaturedCategories";
// import BrandStrip from "../../components/Home/BrandStrip/BrandStrip";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import CTABanner from "../../components/Home/CTABanner/CTABanner";
import WhatsAppButton from "../../components/WhatsppButton";
import Footer from "../../components/Footer/Footer";
const Home = () => {
   const [search, setSearch] = useState<string>("");
   const {restaurantData}=useRestaurant();
   
  return (
    <>
    <div className="overflow-x-hidden pt-15">
     <Navbar restaurnatName={restaurantData?.restaurantData?.restaurantName||null} setSearch={setSearch}   search={search}/>
     <Hero/>
     <hr />
     <FeaturedCategories />
     <WhyChooseUs />
     <CTABanner />
     <Footer />
     <WhatsAppButton/>
    </div>
    </>
    
  )
}

export default Home;