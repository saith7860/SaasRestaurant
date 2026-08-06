import { useRestaurant } from "../../../context/RestaurantContext";
import ShowItems from "../../ItemCard/ShowItems";
import PopularItemsHeader from "./PopularItemsHeader";

import { Link } from "react-router";

const PopularItems = () => {

  const { restaurantData } = useRestaurant();

  const items = restaurantData?.items.slice(0, 8) || [];

  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-5">

        <PopularItemsHeader />

        <ShowItems items={items} />



        <div className="mt-10 flex justify-center md:hidden">

          <Link
            to="/menu"
            className="
            rounded-2xl
            bg-[var(--button-color)]
            px-8
            py-4
            font-semibold
            text-[var(--button-text-color)]
            transition-all
            duration-300
            hover:scale-105
            "
          >
            View All Menu
          </Link>

        </div>

      </div>

    </section>
  );
};

export default PopularItems;