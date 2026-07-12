import api from "../../api/api"
import { useState } from "react"
import handleApiError from "../../api/handleError"
import type { OrderType } from "../../types/DashBoardtype"
import { useDashboard } from "../../context/DashBoardContext"
const OrderStatusForm = ({ order, setShowOrderStatus }: {
  order: OrderType,
  setShowOrderStatus: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [formData, setFormData] = useState({
    id: order._id || '',
    orderStatus: order.orderStatus || 'pending'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  //refreseh data after changing status
  const { refreshDashboardData } = useDashboard();
  //onSubmit function to change status of order
  const ChangeOrderStatus = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.patch("/api/order/update-order-status", formData);
      if (res.status == 200) {
        alert("Order status updated successfully");
        setShowOrderStatus(false);
        await refreshDashboardData();
      }
    } catch (error) {
      console.log("error updating order status", error);
      const result = handleApiError(error);

      if (result?.fieldErrors) {
        setErrors(result.fieldErrors);
      }
    }
  }
  console.log(formData);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
    >
      <div className="w-full max-w-md rounded-3xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-8 shadow-2xl shadow-black/40 flex flex-col gap-5">
        <h2 className="text-2xl font-extrabold text-[var(--primary-color)] text-center tracking-wide">
          Order Status
        </h2>
        <p className="text-center text-sm text-white/60">{order.orderStatus}</p>

        <form
          onSubmit={ChangeOrderStatus}
          className="flex flex-col gap-6 w-full"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[var(--primary-color)]">Select Status</label>
            <select
              name="orderStatus"
              value={formData.orderStatus}
              onChange={(e) => {
                setFormData({ ...formData, orderStatus: e.target.value })
              }}
              className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/25 transition-all duration-300"

            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="out_for_delivery">Out for Delivery</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <p className="mt-1 min-h-5 text-sm text-red-500">
              {errors.orderStatus && <span>{errors.orderStatus}</span>}
            </p>

          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowOrderStatus(false)}
              className="flex-1 rounded-xl border border-white/15 bg-transparent py-3 font-semibold text-[var(--text-color)] hover:bg-[var(--background-color)] hover:border-[var(--primary-color)] transition-all duration-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-[var(--button-color)] py-3 font-bold text-[var(--button-text-color)] shadow-lg shadow-black/20 hover:bg-[var(--primary-color)] hover:text-black active:scale-95 transition-all duration-300"            >
              Update Status
            </button>
          </div>

        </form>
      </div>

    </div>

  )
}

export default OrderStatusForm;