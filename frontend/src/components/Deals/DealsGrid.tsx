import DealCard from "./DealCard";
import type { Deal } from "../../pages/Deals/DealsPage";

interface Props {
  onSelectDeal: (deal: Deal) => void;
}

const DealsGrid = ({ onSelectDeal }: Props) => {
  const deals: Deal[] = [
    {
      id: "1",
      title: "Student Deal",
      image:
        "https://res.cloudinary.com/dwrezyeke/image/upload/v1785051656/food-ordering/restaurants/saucy-sals/deals/student-deal.jpg",
      totalPrice: 1500,
      isAvailable: true,

      items: [
        {
          itemId: "burger-1",
          itemName: "Chicken Burger",
          itemImage:
            "https://res.cloudinary.com/dwrezyeke/image/upload/v1784208525/food-ordering/restaurants/saucy-sals/items/cih3jv5xnmp4xkyrcnyc.jpg",

          variants: [
            {
              id: "small",
              variation: "S",
              price: 400,
            },
            {
              id: "large",
              variation: "L",
              price: 600,
            },
          ],
        },

        {
          itemId: "pizza-1",
          itemName: "Chicken Pizza",
          itemImage:
            "https://res.cloudinary.com/dwrezyeke/image/upload/v1784208525/food-ordering/restaurants/saucy-sals/items/cih3jv5xnmp4xkyrcnyc.jpg",

          variants: [
            {
              id: "medium",
              variation: "Medium",
              price: 700,
            },
            {
              id: "large",
              variation: "Large",
              price: 1000,
            },
          ],
        },
      ],
    },
  ];

  if (!deals.length) {
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

  return (
    <section className="py-12 pb-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <DealCard
              key={deal.id}
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