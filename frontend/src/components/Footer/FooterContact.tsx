import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useRestaurant } from "../../context/RestaurantContext";
const FooterContact = () => {
  const {restaurantData} =useRestaurant();
  return (
    <div>

      <h3 className="mb-6 text-lg font-bold text-white">
        Contact
      </h3>

      <div className="space-y-5">

        <div className="flex gap-3">

          <Phone size={18} className="text-[var(--primary-color)]" />

          <span className="text-white/70">
            {restaurantData?.branches?.[0].contactNumber || "Not Available"}
          </span>

        </div>

        <div className="flex gap-3">

          <Mail size={18} className="text-[var(--primary-color)]" />

          <span className="text-white/70">
            {restaurantData?.restaurantData?.restaurantEmail || "Not Available"}
          </span>

        </div>

        <div className="flex gap-3">

          <MapPin size={18} className="text-[var(--primary-color)]" />

          <span className="text-white/70"> 
            {restaurantData?.branches?.[0].address || "Not Available"}
          </span>

        </div>

      </div>

    </div>
  );
};

export default FooterContact;