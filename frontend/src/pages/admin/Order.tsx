import { useState } from "react";
import { useDashboard } from "../../context/DashBoardContext"
import OrderStatusForm from "../../components/Admin/OrderStatusForm";
import type { OrderType } from "../../types/DashBoardtype";
const Order = () => {
    const { orders } = useDashboard();
    const [showOrderStatus, setShowOrderStatus] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);



    return (
        <>
            <div className="my-8 text-center text-2xl font-extrabold tracking-wide text-[var(--primary-color)] sm:text-3xl" >Manage Orders</div>

            <div className="overflow-x-auto rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] shadow-xl">

                <table className="w-full border-separate border-spacing-0">
                    <thead>
                        <tr className="bg-[var(--card-color)] text-[var(--text-color)]">
                            <th className="border-b border-[var(--primary-color)]/15 px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-[var(--primary-color)]">Customer</th>
                            <th className="border-b border-[var(--primary-color)]/15 px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-[var(--primary-color)]">Phone</th>
                            <th className="border-b border-[var(--primary-color)]/15 px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-[var(--primary-color)]">Address</th>
                            <th className="border-b border-[var(--primary-color)]/15 px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-[var(--primary-color)]">Amount</th>
                            <th className="border-b border-[var(--primary-color)]/15 px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-[var(--primary-color)]">Status</th>
                            <th className="border-b border-[var(--primary-color)]/15 px-5 py-4 text-center text-sm font-semibold uppercase tracking-wide text-[var(--primary-color)]">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders?.map(
                            (order) =>
                                order.userId && (
                                    <tr
                                        key={order._id}
                                        className="border-b border-white/10 transition-colors duration-200 hover:bg-white/5"
                                    >
                                        <td className="px-5 py-4 text-[var(--text-color)]">{order.userId.name}</td>

                                        <td className="px-5 py-4 text-[var(--text-color)]">
                                            {order.userId.phone}
                                        </td>

                                        <td className="max-w-xs truncate px-5 py-4 text-[var(--text-color)]/90">
                                            {order.deliveryAddress}
                                        </td>

                                        <td className="px-5 py-4 text-[var(--text-color)]">
                                            Rs. {order.totalAmount}
                                        </td>

                                        <td className="px-5 py-4 text-[var(--text-color)]">
                                            <span className="inline-flex rounded-full bg-[var(--button-color)] px-4 py-2 text-sm font-medium text-[var(--button-text-color)] shadow">
                                                {order.orderStatus}
                                            </span>
                                        </td>

                                        <td className="px-5 py-4 text-center">
                                            <button
                                                onClick={() => {
                                                    setShowOrderStatus(true);
                                                    setSelectedOrder(order);
                                                }}
                                                className="w-32 rounded-xl bg-[var(--button-color)] px-4 py-2.5 font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95"
                                            >
                                                Edit Status
                                            </button>
                                        </td>
                                    </tr>
                                )
                        )}
                    </tbody>
                </table>

                {showOrderStatus && selectedOrder && (
                    <OrderStatusForm
                        order={selectedOrder}
                        setShowOrderStatus={setShowOrderStatus}
                    />
                )}
            </div>

        </>

    )
}

export default Order;