import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CTAButton = () => {
  return (

    <Link to="/menu">
      <button
        className="
      group
      inline-flex
      items-center
      gap-3
      rounded-2xl
      bg-[var(--button-color)]
      px-8
      py-4
      font-semibold
      text-[var(--button-text-color)]
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-xl
      "
      >
        Order Now

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-2"
        />
      </button>
    </ Link>
  );
};

export default CTAButton;