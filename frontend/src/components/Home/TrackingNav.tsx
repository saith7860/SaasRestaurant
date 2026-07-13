import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";
import type { FC } from "react";
import type { TrackingNavProps } from "../../types/HomePageTypes";
import { Link } from "react-router";

const TrackingNav: FC<TrackingNavProps> = ({ restaurnatName }) => {

  const { cart } = useContext(CartContext)!;
  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--background-color)]/95 backdrop-blur-lg border-b border-[var(--primary-color)]/15 shadow-lg px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">

        {/* Logo / Restaurant Name */}
        <Link to={"/"}>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-[var(--primary-color)] hover:text-[var(--text-color)] transition-colors duration-300">
            {restaurnatName}
          </h1>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to={"/cart"}>
            <button className="relative flex items-center gap-2 bg-[var(--card-color)] border border-[var(--primary-color)]/20 text-[var(--text-color)] px-4 py-2 rounded-xl hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] hover:border-[var(--primary-color)] transition-all duration-300">
              <ShoppingCart size={18} />
              <span>Cart</span>

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-[var(--primary-color)] px-1 text-xs font-bold text-[var(--background-color)] shadow-lg ring-2 ring-[var(--card-color)]">
                  {totalItems}
                </span>
              )}


            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default TrackingNav;