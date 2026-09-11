import { Link } from "react-router";
import { useRestaurant } from "../../context/RestaurantContext";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import WhatsAppButton from "../../components/WhatsppButton";

const AboutPage = () => {
  const { restaurantData } = useRestaurant();



  console.log(restaurantData)

  return (
    <div className="min-h-screen pt-15 bg-[var(--background-color)] text-[var(--text-color)]">

      {/* Navbar */}
      <Navbar
        restaurnatName={restaurantData?.restaurantData?.restaurantName || null}
      />
      <section className="flex flex-col items-center justify-center p-10 m-10">
        <h1 className="text-3xl font-bold">Our Story</h1>
        <p className="text-sm leading-6 text-[var(--text-color)]/60">{restaurantData?.restaurantData?.description}</p>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-80
            w-80
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[var(--primary-color)]/10
            blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[var(--primary-color)]
            "
          >
            Ready to Taste It?
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Your Next Favorite Meal
            <span className="block text-[var(--primary-color)]">
              Is Waiting.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              leading-7
              text-[var(--text-color)]/60
            "
          >
            Explore our menu, discover something new, or check
            out our latest deals.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              to="/menu"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[var(--button-color)]
                px-6
                py-3
                font-semibold
                text-[var(--button-text-color)]
                shadow-lg
                transition-all
                hover:-translate-y-0.5
                hover:bg-[var(--primary-color)]
                hover:text-[var(--background-color)]
              "
            >
              Explore Our Menu
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/deal"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[var(--primary-color)]/20
                bg-[var(--card-color)]
                px-6
                py-3
                font-semibold
                transition-all
                hover:border-[var(--primary-color)]
                hover:bg-[var(--primary-color)]/5
              "
            >
              View Our Deals
            </Link>

          </div>

        </div>

      </section>

      <Footer />

      <WhatsAppButton />

    </div>
  );
};

/* =========================================================
   Small Reusable Components
========================================================= */

// interface ValueCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// const ValueCard = ({
//   icon,
//   title,
//   description,
// }: ValueCardProps) => {
//   return (
//     <div
//       className="
//         rounded-2xl
//         border
//         border-[var(--primary-color)]/10
//         bg-[var(--card-color)]
//         p-6
//         shadow-sm
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:border-[var(--primary-color)]/25
//         hover:shadow-xl
//       "
//     >
//       <div
//         className="
//           flex
//           h-12
//           w-12
//           items-center
//           justify-center
//           rounded-xl
//           bg-[var(--primary-color)]/10
//           text-[var(--primary-color)]
//         "
//       >
//         {icon}
//       </div>

//       <h3 className="mt-5 text-lg font-bold">
//         {title}
//       </h3>

//       <p className="mt-2 text-sm leading-6 text-[var(--text-color)]/60">
//         {description}
//       </p>
//     </div>
//   );
// };

// interface WhyChooseItemProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// const WhyChooseItem = ({
//   icon,
//   title,
//   description,
// }: WhyChooseItemProps) => {
//   return (
//     <div className="flex gap-4">

//       <div
//         className="
//           flex
//           h-10
//           w-10
//           shrink-0
//           items-center
//           justify-center
//           rounded-xl
//           bg-[var(--primary-color)]/10
//           text-[var(--primary-color)]
//         "
//       >
//         {icon}
//       </div>

//       <div>
//         <h3 className="font-bold">
//           {title}
//         </h3>

//         <p className="mt-1 text-sm leading-6 text-[var(--text-color)]/60">
//           {description}
//         </p>
//       </div>

//     </div>
//   );
// };

// interface FeatureStatProps {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
// }

// const FeatureStat = ({
//   icon,
//   label,
//   value,
// }: FeatureStatProps) => {
//   return (
//     <div
//       className="
//         rounded-2xl
//         border
//         border-[var(--primary-color)]/10
//         bg-[var(--card-color)]
//         p-5
//         text-center
//       "
//     >
//       <div className="flex justify-center text-[var(--primary-color)]">
//         {icon}
//       </div>

//       <p className="mt-3 text-xl font-black">
//         {value}
//       </p>

//       <p className="mt-1 text-xs text-[var(--text-color)]/50">
//         {label}
//       </p>
//     </div>
//   );
// };

// interface StatProps {
//   value: string;
//   label: string;
//   note?: string;
// }

// const Stat = ({
//   value,
//   label,
//   note,
// }: StatProps) => {
//   return (
//     <div className="text-center">

//       <p className="text-3xl font-black text-[var(--primary-color)] sm:text-4xl">
//         {value}
//       </p>

//       <p className="mt-2 text-sm font-bold">
//         {label}
//       </p>

//       {note && (
//         <p className="mt-1 text-xs text-[var(--text-color)]/40">
//           {note}
//         </p>
//       )}

//     </div>
//   );
// };

export default AboutPage;