import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { useRestaurant } from "../../context/RestaurantContext";
import { toast } from "react-toastify";
const FooterBrand = () => {
const {restaurantData} =useRestaurant();
  const socials = [
    { name: "Facebook", url: restaurantData?.restaurantData?.socialLinks.facebook, icon: FaFacebookF },
    { name: "Instagram", url: restaurantData?.restaurantData?.socialLinks.instagram, icon: FaInstagram },
  ];
  const handleRedirect=(url:string)=>{
    if(url){
      window.open(url, "_blank");
    }
    else{
       toast.error("No link available")
    }
  }
  return (
    <div>

      <h3 className="text-3xl font-black text-white">
        {restaurantData?.restaurantData?.restaurantName}
      </h3>

      <p className="mt-5 max-w-sm leading-7 text-white/70">
        {restaurantData?.restaurantData?.description.slice(0,50)}
      </p>

      <div className="mt-7 flex gap-4">
        {socials.map((social) => (
          <button
            onClick={()=>handleRedirect(social.url)}
            key={social.name}
            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                duration-300
                hover:bg-[var(--primary-color)]
                "
          >
            <social.icon className="text-lg text-white" />
          </button>
        ))}
      </div>

    </div>
  );
};

export default FooterBrand;