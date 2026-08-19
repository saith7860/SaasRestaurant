import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Heart,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Utensils,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import { useRestaurant } from "../../context/RestaurantContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import WhatsAppButton from "../../components/WhatsppButton";

const AboutPage = () => {
  const { restaurantData } = useRestaurant();

  const restaurant = restaurantData?.restaurantData;

  const restaurantName =
    restaurant?.restaurantName || "Our Restaurant";

  /*
   * Use the restaurant's real image if your backend provides one.
   * Otherwise the fallback image is used.
   */
  const restaurantImage =
    restaurant?.image?.url ||
    restaurant?.logo?.url ||
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="min-h-screen pt-15 bg-[var(--background-color)] text-[var(--text-color)]">

      {/* Navbar */}
      <Navbar
        restaurnatName={restaurantName}
        setSearch={() => { }}
        search=""
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-[var(--primary-color)]/10
            blur-[140px]
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            px-5
            py-16
            md:grid-cols-2
            md:py-24
          "
        >

          {/* Left */}
          <div>

            <span
              className="
                inline-flex
                rounded-full
                border
                border-[var(--primary-color)]/20
                bg-[var(--card-color)]
                px-5
                py-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[var(--primary-color)]
              "
            >
              Our Story
            </span>

            <h1
              className="
                mt-6
                text-4xl
                font-black
                leading-tight
                sm:text-5xl
                md:text-6xl
              "
            >
              More Than Food.
              <span className="block text-[var(--primary-color)]">
                It's an Experience.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-8
                text-[var(--text-color)]/65
                md:text-lg
              "
            >
              Welcome to{" "}
              <span className="font-bold text-[var(--text-color)]">
                {restaurantName}
              </span>
              . We believe great food brings people together,
              creates memories, and turns ordinary moments into
              something special.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

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

          {/* Right - Image */}
          <div className="relative">

            <div
              className="
                absolute
                -inset-3
                rounded-[2rem]
                bg-[var(--primary-color)]/10
                blur-2xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--primary-color)]/10
                bg-[var(--card-color)]
                shadow-2xl
              "
            >
              <img
                src={restaurantImage}
                alt={restaurantName}
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Floating badge */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/60
                  px-5
                  py-4
                  text-white
                  shadow-xl
                  backdrop-blur-md
                "
              >
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Welcome to
                </p>

                <p className="mt-1 text-lg font-black">
                  {restaurantName}
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="border-y border-[var(--primary-color)]/10 bg-[var(--card-color)]">

        <div className="mx-auto max-w-7xl px-5 py-20">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Decorative block */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--primary-color)]/10
                bg-[var(--background-color)]
                p-8
                md:p-12
              "
            >

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[var(--primary-color)]/10
                  blur-3xl
                "
              />

              <Heart
                size={42}
                className="relative text-[var(--primary-color)]"
              />

              <h2
                className="
                  relative
                  mt-6
                  text-3xl
                  font-black
                  sm:text-4xl
                "
              >
                Made With Passion,
                <span className="block text-[var(--primary-color)]">
                  Served With Love.
                </span>
              </h2>

              <p
                className="
                  relative
                  mt-5
                  leading-8
                  text-[var(--text-color)]/65
                "
              >
                Every dish we serve represents our commitment
                to creating food that people genuinely enjoy.
                From the ingredients we choose to the way every
                meal is prepared, we care about the details.
              </p>

            </div>

            {/* Story */}
            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[var(--primary-color)]
                "
              >
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Built Around Good Food & Good People
              </h2>

              <p
                className="
                  mt-6
                  leading-8
                  text-[var(--text-color)]/65
                "
              >
                What started with a simple idea — serve delicious
                food and make every customer feel welcome — has
                grown into a restaurant experience built around
                quality, consistency, and hospitality.
              </p>

              <p
                className="
                  mt-4
                  leading-8
                  text-[var(--text-color)]/65
                "
              >
                We continue to improve, experiment, and listen to
                our customers so that every visit feels just a
                little better than the last.
              </p>

              <div className="mt-8 flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--primary-color)]/10
                    text-[var(--primary-color)]
                  "
                >
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="font-bold">
                    Quality in every detail
                  </p>

                  <p className="text-sm text-[var(--text-color)]/55">
                    From our kitchen to your table.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHAT WE BELIEVE
      ===================================================== */}

      <section>

        <div className="mx-auto max-w-7xl px-5 py-20">

          <div className="mx-auto max-w-2xl text-center">

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--primary-color)]
              "
            >
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              The Values Behind Every Meal
            </h2>

            <p className="mt-4 leading-7 text-[var(--text-color)]/60">
              We keep our focus simple: make great food, serve it
              with care, and give our customers an experience worth
              coming back for.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <ValueCard
              icon={<Leaf size={24} />}
              title="Fresh Ingredients"
              description="We believe quality starts with the ingredients that go into every dish."
            />

            <ValueCard
              icon={<Utensils size={24} />}
              title="Quality Food"
              description="Every meal should be delicious, satisfying, and prepared with care."
            />

            <ValueCard
              icon={<Heart size={24} />}
              title="Customer Experience"
              description="Good food matters, but making customers feel welcome matters too."
            />

            <ValueCard
              icon={<ShieldCheck size={24} />}
              title="Consistency"
              description="You should be able to expect the same great experience every time."
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="bg-[var(--card-color)]">

        <div className="mx-auto max-w-7xl px-5 py-20">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[var(--primary-color)]
                "
              >
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Simple Reasons to Keep Coming Back
              </h2>

              <p
                className="
                  mt-5
                  leading-8
                  text-[var(--text-color)]/60
                "
              >
                We want ordering food to be easy, enjoyable, and
                worth it — whether you're dining with friends,
                grabbing a quick meal, or ordering from home.
              </p>

              <div className="mt-8 space-y-5">

                <WhyChooseItem
                  icon={<Clock3 size={20} />}
                  title="Fast Service"
                  description="We value your time and work to get your order ready without unnecessary delays."
                />

                <WhyChooseItem
                  icon={<Utensils size={20} />}
                  title="Carefully Prepared"
                  description="Our meals are prepared with attention to taste, quality, and presentation."
                />

                <WhyChooseItem
                  icon={<Sparkles size={20} />}
                  title="Special Deals"
                  description="Enjoy specially crafted combinations and offers at great prices."
                />

                <WhyChooseItem
                  icon={<CheckCircle2 size={20} />}
                  title="Easy Ordering"
                  description="Browse the menu, choose your favorites, and place your order with ease."
                />

              </div>

            </div>

            <div
              className="
                rounded-[2rem]
                border
                border-[var(--primary-color)]/10
                bg-[var(--background-color)]
                p-8
                shadow-xl
                md:p-10
              "
            >

              <div className="grid grid-cols-2 gap-4">

                <FeatureStat
                  icon={<Utensils size={22} />}
                  label="Quality"
                  value="100%"
                />

                <FeatureStat
                  icon={<Heart size={22} />}
                  label="Care"
                  value="Always"
                />

                <FeatureStat
                  icon={<Sparkles size={22} />}
                  label="Deals"
                  value="Special"
                />

                <FeatureStat
                  icon={<Users size={22} />}
                  label="Service"
                  value="For You"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}



      <section className="border-y border-[var(--primary-color)]/10">

        <div className="mx-auto max-w-7xl px-5 py-16">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">


            {/* <Stat
          value={yearsServing}
          label="Years Serving"
          />

          <Stat
          value={menuItems.length}
          label="Menu Items"
          />

          <Stat
          value={branches.length}
          label="Branches"
          />

          <Stat
          value={happyCustomers}
          label="Happy Customers"
          /> */}

            <Stat
              value="—"
              label="Years Serving"
              note="Add when available"
            />

            <Stat
              value="—"
              label="Menu Items"
              note="Add when available"
            />

            <Stat
              value="—"
              label="Branches"
              note="Add when available"
            />

            <Stat
              value="—"
              label="Happy Customers"
              note="Add when available"
            />

          </div>

        </div>

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

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({
  icon,
  title,
  description,
}: ValueCardProps) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--primary-color)]/10
        bg-[var(--card-color)]
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--primary-color)]/25
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[var(--primary-color)]/10
          text-[var(--primary-color)]
        "
      >
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--text-color)]/60">
        {description}
      </p>
    </div>
  );
};

interface WhyChooseItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseItem = ({
  icon,
  title,
  description,
}: WhyChooseItemProps) => {
  return (
    <div className="flex gap-4">

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[var(--primary-color)]/10
          text-[var(--primary-color)]
        "
      >
        {icon}
      </div>

      <div>
        <h3 className="font-bold">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-[var(--text-color)]/60">
          {description}
        </p>
      </div>

    </div>
  );
};

interface FeatureStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const FeatureStat = ({
  icon,
  label,
  value,
}: FeatureStatProps) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--primary-color)]/10
        bg-[var(--card-color)]
        p-5
        text-center
      "
    >
      <div className="flex justify-center text-[var(--primary-color)]">
        {icon}
      </div>

      <p className="mt-3 text-xl font-black">
        {value}
      </p>

      <p className="mt-1 text-xs text-[var(--text-color)]/50">
        {label}
      </p>
    </div>
  );
};

interface StatProps {
  value: string;
  label: string;
  note?: string;
}

const Stat = ({
  value,
  label,
  note,
}: StatProps) => {
  return (
    <div className="text-center">

      <p className="text-3xl font-black text-[var(--primary-color)] sm:text-4xl">
        {value}
      </p>

      <p className="mt-2 text-sm font-bold">
        {label}
      </p>

      {note && (
        <p className="mt-1 text-xs text-[var(--text-color)]/40">
          {note}
        </p>
      )}

    </div>
  );
};

export default AboutPage;