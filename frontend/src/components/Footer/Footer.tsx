import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterHours from "./FooterHours";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer
      className="
      mt-24
      bg-[#111111]
      text-white
      "
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        py-20
        "
      >
        <div
          className="
          grid
          gap-14
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >
          <FooterBrand />

          <FooterLinks />

          <FooterContact />

          <FooterHours />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;