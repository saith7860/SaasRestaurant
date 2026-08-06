import Navbar from "../../components/Home/Navbar"
import { useRestaurant } from "../../context/RestaurantContext";
import WhatsAppButton from "../../components/WhatsppButton";
import Hero from "../../components/Home/Hero/Hero";
import PopularItems from "../../components/Home/PopularItems/PopularItems";
import FeaturedCategories from "../../components/Home/Featured Categories/FeaturedCategories";
import BrandStrip from "../../components/Home/BrandStrip/BrandStrip";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import CTABanner from "../../components/Home/CTABanner/CTABanner";
import Footer from "../../components/Footer/Footer";
const Home = () => {
   const {restaurantData}=useRestaurant();
  return (
    <>
    <div className="overflow-x-hidden">

     <Navbar restaurnatName={restaurantData?.restaurantData?.restaurantName||null} />
     <Hero/>
     <BrandStrip />
     <FeaturedCategories />
     <PopularItems/>
     <WhyChooseUs />
     <CTABanner />
     <Footer />
     <WhatsAppButton/>
    </div>
    </>
    
  )
}

export default Home;