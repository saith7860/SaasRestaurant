import DealCard from "./DealCard";
import type {Deals } from "../../types/DashBoardtype";
import { useRestaurant } from "../../context/RestaurantContext";

interface Props {
  onSelectDeal: (deal: Deals) => void;
}

const DealsGrid = ({ onSelectDeal }: Props) => {
  const { restaurantData } = useRestaurant();

  const deals = restaurantData?.deals;


if (!deals?.length) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--primary-color)]/10 text-4xl">
          🎁
        </div>

        <h2 className="mt-6 text-2xl font-bold">
          No Deals Available
        </h2>

        <p className="mt-2 text-[var(--text-color)]/60">
          Check back later for exciting offers.
        </p>
      </div>
    </section>
  );
}



  // ...

  return (
    <section className="py-12 pb-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal:Deals) => (
            <DealCard
              key={deal._id}
              deal={deal}
              onClick={() => onSelectDeal(deal)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsGrid;