import { MapPin, Store, Star, UtensilsCrossed } from "lucide-react";

const restaurants = [
  {
    name: "Burger Hub",
    city: "Lahore",
    category: "Fast Food",
  },
  {
    name: "Spice Garden",
    city: "Islamabad",
    category: "Pakistani",
  },
  {
    name: "Pizza Point",
    city: "Karachi",
    category: "Italian",
  },
  {
    name: "BBQ Express",
    city: "Faisalabad",
    category: "BBQ",
  },
  {
    name: "Cafe Aroma",
    city: "Multan",
    category: "Cafe",
  },
  {
    name: "The Food Corner",
    city: "Rawalpindi",
    category: "Restaurant",
  },
];

const TrustedBy = () => {
  return (
    <section
      id="trusted"
      className="bg-[var(--background-color)] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-[var(--primary-color)]/20 bg-[var(--card-color)] px-4 py-2 text-sm font-semibold text-[var(--primary-color)]">
            Trusted Across Pakistan
          </span>

          <h2 className="mt-6 text-4xl font-black text-[var(--text-color)] md:text-5xl">
            Restaurants Growing With Our Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-color)]/70">
            From local cafés to multi-branch restaurants, businesses trust
            our platform to manage online orders, digital menus,
            and customer experiences.
          </p>

        </div>

        {/* Statistics */}

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] p-8 text-center shadow-lg">

            <Store
              className="mx-auto mb-4 text-[var(--primary-color)]"
              size={36}
            />

            <h3 className="text-4xl font-black text-[var(--primary-color)]">
              100+
            </h3>

            <p className="mt-2 text-[var(--text-color)]/70">
              Restaurants
            </p>

          </div>

          <div className="rounded-3xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] p-8 text-center shadow-lg">

            <UtensilsCrossed
              className="mx-auto mb-4 text-[var(--primary-color)]"
              size={36}
            />

            <h3 className="text-4xl font-black text-[var(--primary-color)]">
              50K+
            </h3>

            <p className="mt-2 text-[var(--text-color)]/70">
              Orders Served
            </p>

          </div>

          <div className="rounded-3xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] p-8 text-center shadow-lg">

            <MapPin
              className="mx-auto mb-4 text-[var(--primary-color)]"
              size={36}
            />

            <h3 className="text-4xl font-black text-[var(--primary-color)]">
              20+
            </h3>

            <p className="mt-2 text-[var(--text-color)]/70">
              Cities
            </p>

          </div>

          <div className="rounded-3xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] p-8 text-center shadow-lg">

            <Star
              className="mx-auto mb-4 fill-yellow-400 text-yellow-400"
              size={36}
            />

            <h3 className="text-4xl font-black text-[var(--primary-color)]">
              4.9
            </h3>

            <p className="mt-2 text-[var(--text-color)]/70">
              Average Rating
            </p>

          </div>

        </div>

        {/* Restaurant Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {restaurants.map((restaurant) => (

            <div
              key={restaurant.name}
              className="group rounded-3xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary-color)] hover:shadow-2xl"
            >

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary-color)]/10">

                <Store
                  size={30}
                  className="text-[var(--primary-color)]"
                />

              </div>

              <h3 className="text-2xl font-bold text-[var(--text-color)]">
                {restaurant.name}
              </h3>

              <p className="mt-2 text-[var(--text-color)]/70">
                {restaurant.category}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="flex items-center gap-2 text-sm text-[var(--text-color)]/70">

                  <MapPin size={16} />

                  {restaurant.city}

                </span>

                <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                  Active
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default TrustedBy;