import { Link } from "react-router";
import { quickLinks } from "./Links";

const FooterLinks = () => {
  return (
    <div>

      <h3 className="mb-6 text-lg font-bold text-white">
        Quick Links
      </h3>

      <div className="space-y-4">

        {quickLinks.map((item) => (

          <Link
            key={item.title}
            to={item.path}
            className="
            block
            text-white/70
            transition
            duration-300
            hover:text-[var(--primary-color)]
            "
          >
            {item.title}
          </Link>

        ))}

      </div>

    </div>
  );
};

export default FooterLinks;