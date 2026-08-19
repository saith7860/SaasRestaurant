import { useRestaurant } from "../../context/RestaurantContext";
import ContactHero from "../../components/ContactUs/ContactHero";
import ContactInfo from "../../components/ContactUs/ContactInfo";
import ContactForm from "../../components/ContactUs/ContactForm";
import ContactMap from "../../components/ContactUs/ContactMap";
import ContactCTA from "../../components/ContactUs/ContactCTA";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import WhatsAppButton from "../../components/WhatsppButton";

const ContactUs = () => {
  const { restaurantData } = useRestaurant();

  const restaurant = restaurantData?.restaurantData;

  return (
    <div className="min-h-screen pt-15 bg-[var(--background-color)] text-[var(--text-color)]">

      <Navbar
        restaurnatName={restaurant?.restaurantName || null}
        setSearch={() => {}}
        search=""
      />

      <ContactHero
        restaurantName={restaurant?.restaurantName || "our restaurant"}
      />

      <ContactInfo
        phone={restaurant?.contactNumber}
        email={restaurant?.restaurantEmail}
        branchesCount={restaurantData?.branches?.length}
      />

      <ContactForm />

      <ContactMap
        branches={restaurantData?.branches || []}
      />

      <ContactCTA />

      <Footer />

      <WhatsAppButton />

    </div>
  );
};

export default ContactUs;