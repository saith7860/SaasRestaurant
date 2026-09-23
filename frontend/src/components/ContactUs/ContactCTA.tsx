import { ArrowRight, ShoppingBag, Tag } from "lucide-react";
import { Link } from "react-router";

const ContactCTA = () => {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-5">

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[var(--primary-color)]/20
            bg-[var(--card-color)]
            px-6
            py-12
            shadow-xl
            md:px-12
            md:py-16
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-[var(--primary-color)]/10
              blur-[90px]
            "
          />

          <div
            className="
              relative
              mx-auto
              max-w-3xl
              text-center
            "
          >
            <span
              className="
                inline-flex
                rounded-full
                bg-[var(--primary-color)]/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[var(--primary-color)]
              "
            >
              Hungry?
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-black
                leading-tight
                md:text-5xl
              "
            >
              Don't Just Talk About
              <span className="text-[var(--primary-color)]">
                {" "}Good Food.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-[var(--text-color)]/60
                md:text-base
              "
            >
              Explore our menu, discover something delicious, and
              place your order today.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/menu"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[var(--button-color)]
                  px-6
                  py-3.5
                  font-bold
                  text-[var(--button-text-color)]
                  shadow-lg
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[var(--primary-color)]
                  hover:text-[var(--background-color)]
                "
              >
                <ShoppingBag size={18} />
                Explore Our Menu
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/deal"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[var(--primary-color)]/20
                  bg-[var(--background-color)]
                  px-6
                  py-3.5
                  font-bold
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-[var(--primary-color)]
                  hover:bg-[var(--primary-color)]/10
                "
              >
                <Tag size={18} />
                View Our Deals
              </Link>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;