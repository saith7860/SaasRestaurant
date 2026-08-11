import DealCard from "./DealCard";
import { useEffect, useState } from "react";
import api from "../../../api/api";


interface Deal {
  id: string;
  title: string;
  image: string;
  totalPrice: number;
  itemCount: number;
  isAvailable: boolean;
}


const DealsTable = () => {

  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDeals = async () => {
    try {
      setLoading(true);

      const response = await api.get("/your-deal-endpoint");

      setDeals(response.data.result);
    } catch (error) {
      console.error("Failed to fetch deals:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);



  if (deals.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-[var(--primary-color)]/10 bg-[var(--card-color)]">

        <div className="text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)]/10 text-3xl">
            🎁
          </div>

          <h2 className="mt-5 text-xl font-bold">
            No Deals Found
          </h2>

          <p className="mt-2 text-sm text-[var(--text-color)]/60">
            Create your first restaurant deal.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

      {deals.map((deal) => (
        <DealCard
          key={deal.id}
          deal={deal}
        />
      ))}

    </div>
  );
};

export default DealsTable;