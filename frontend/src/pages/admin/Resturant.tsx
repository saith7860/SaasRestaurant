import { useDashboard } from "../../context/DashBoardContext";
import { useState } from "react"
import ResturantForm from "../../components/Admin/ResturantForm";
const Resturant = () => {
  const [showForm, setShowForm] = useState(false);
  const { restaurant } = useDashboard();

  return (

    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6">

      <div>
        <div className="mb-10 text-center text-2xl font-extrabold tracking-wide text-[var(--primary-color)] sm:text-3xl" >{restaurant?.restaurantName}</div>
        <div className="flex flex-col gap-5 rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-xl">
          {/* <img src={restaurant?.image} alt="" /> */}
          {/* <div>{restaurant?.description}</div> */}

          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-semibold text-[var(--primary-color)]">
              Contact Number:
            </span>
            <span className="text-[var(--text-color)]">
              {restaurant?.contactNumber}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-semibold text-[var(--primary-color)]">
              Email:
            </span>
            <span className="text-[var(--text-color)]">
              {restaurant?.restaurantEmail}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-semibold text-[var(--primary-color)]">
              Delivery Fee:
            </span>
            <span className="text-[var(--text-color)]">
              {restaurant?.deliveryFee}
            </span>
          </div>

          <div className="flex items-center justify-between ">
            <span className="font-semibold text-[var(--primary-color)]">
              Delivery Time:
            </span>
            <span className="text-[var(--text-color)]">
              {restaurant?.estimatedDeliveryTime}
            </span>
          </div>

        </div>
      </div>

      <div
        className="mt-8 flex justify-center">
        <button
          className="rounded-xl bg-[var(--button-color)] px-8 py-3 text-lg font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-[0.98]"
          onClick={() => {
            setShowForm(true);
          }}>Update Resturant</button>
      </div>

      {
        showForm && (
          <div>
            <ResturantForm restaurant={restaurant} setShowForm={setShowForm} />
          </div>
        )
      }

    </div >
  )
}

export default Resturant;