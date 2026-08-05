import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const FooterBrand = () => {

  const socials = [
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
  ];

  return (
    <div>

      <h2 className="text-3xl font-black text-white">
        Saucy Sals
      </h2>

      <p className="mt-5 max-w-sm leading-7 text-white/70">
        Freshly prepared meals delivered with love.
        Quality ingredients, unforgettable taste,
        and fast delivery.
      </p>

      <div className="mt-7 flex gap-4">
        {socials.map((Icon, index) => (
          <button
            key={index}
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
            <Icon className="text-lg text-white" />
          </button>
        ))}
      </div>

    </div>
  );
};

export default FooterBrand;