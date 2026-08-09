import { Edit, Trash2, PackageCheck } from "lucide-react";

interface Deal {
  id: string;
  title: string;
  image: string;
  totalPrice: number;
  itemCount: number;
  isAvailable: boolean;
}

interface DealCardProps {
  deal: Deal;
}

const DealCard = ({
  deal,
}: DealCardProps) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[var(--primary-color)]/10
        bg-[var(--card-color)]
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--primary-color)]/30
        hover:shadow-2xl
      "
    >

      {/* Image */}

      <div className="relative h-52 overflow-hidden">

        <img
          src={deal.image}
          alt={deal.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div
          className="
            absolute
            right-3
            top-3
            rounded-full
            bg-[var(--background-color)]/90
            px-3
            py-1
            text-xs
            font-bold
            backdrop-blur
          "
        >
          {deal.isAvailable ? (
            <span className="text-green-500">
              Active
            </span>
          ) : (
            <span className="text-red-400">
              Inactive
            </span>
          )}
        </div>

      </div>


      {/* Content */}

      <div className="p-5">

        <div className="flex items-start justify-between gap-4">

          <div>
            <h2 className="text-xl font-bold">
              {deal.title}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-color)]/60">

              <PackageCheck size={16} />

              <span>
                {deal.itemCount} Items
              </span>

            </div>
          </div>

          <p className="text-lg font-black text-[var(--primary-color)]">
            Rs. {deal.totalPrice}
          </p>

        </div>


        {/* Actions */}

        <div className="mt-5 flex gap-3">

          <button
            type="button"
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-[var(--primary-color)]/15
              py-2.5
              text-sm
              font-semibold
              transition-all
              hover:border-[var(--primary-color)]
              hover:bg-[var(--primary-color)]/5
            "
          >
            <Edit size={16} />
            Edit
          </button>

          <button
            type="button"
            className="
              flex
              items-center
              justify-center
              rounded-xl
              px-4
              py-2.5
              text-red-400
              transition-all
              hover:bg-red-500/10
              hover:text-red-300
            "
          >
            <Trash2 size={17} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default DealCard;