import { useState } from "react";
import { useDashboard } from "../../context/DashBoardContext"
import OrderStatusForm from "../../components/Admin/OrderStatusForm";
import type { OrderType } from "../../types/DashBoardtype";
const Order = () => {
    const { orders } = useDashboard();
    const [showOrderStatus, setShowOrderStatus] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
    const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);


    return (
        <div className="mx-3 min-h-screen">

            <div className="relative mb-6 flex items-center justify-center">

                <h3 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-[var(--primary-color)] sm:text-3xl">
                    Manage Orders
                </h3>

                <span className="absolute right-0 top-10 rounded-lg bg-[var(--background-color)] px-4 py-2 text-sm text-[var(--text-color)]">
                    {orders?.length} Orders
                </span>
            </div>


            <div className="space-y-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {orders?.map(
                    (order) =>
                        order.userId && (
                            <div
                                key={order._id}
                                className="rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-4 shadow-lg"
                            >
                                {/* Customer */}
                                <div className="mb-3 flex gap-6">
                                    <span className="text-sm font-medium uppercase text-[var(--primary-color)]">
                                        Customer :
                                    </span>
                                    <span className="font-light text-[var(--text-color)]">
                                        {order.userId.name}
                                    </span>
                                </div>

                                {/* Phone */}
                                <div className="mb-3 flex gap-6">
                                    <span className="text-sm font-medium uppercase text-[var(--primary-color)]">
                                        Phone :
                                    </span>
                                    <span className="font-light text-[var(--text-color)]">
                                        {order.userId.phone}
                                    </span>
                                </div>

                                {/* Address */}
                                <div className="mb-3 flex gap-6">
                                    <span className="font-medium text-sm usercase text-[var(--primary-color)]">
                                        Address :
                                    </span>
                                    <span className="font-light break-words text-[var(--text-color)]">
                                        {order.deliveryAddress}
                                    </span>
                                </div>


                                {/* Amount */}
                                <div className="mb-3 flex gap-6">
                                    <span className="font-medium text-sm uppercase text-[var(--primary-color)]">
                                        Amount :
                                    </span>

                                    <span className="font-semibold text-[var(--primary-color)]">
                                        Rs. {order.totalAmount}
                                    </span>
                                </div>

                                {/* Status */}
                                <div className="mb-3 flex justify-between">
                                    <span className="font-medium text-sm uppercase text-[var(--primary-color)]">
                                        Status :
                                    </span>

                                    <span className="font-light rounded-full bg-[var(--button-color)] px-6 py-1 text-sm text-[var(--button-text-color)]">
                                        {order.orderStatus}
                                    </span>
                                </div>


                                {/* view item  */}
                                <div className="relative">
                                    <button
                                        onClick={() =>
                                            setExpandedOrderId(
                                                expandedOrderId === order._id ? null : order._id
                                            )
                                        }
                                        className="mb-3 w-full rounded-xl border border-[var(--primary-color)] bg-transparent py-2 font-medium text-[var(--primary-color)] transition hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
                                    >
                                        View Items
                                    </button>

                                    {expandedOrderId === order._id && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                                            <div className="relative max-h-[80vh] w-full max-w-md overflow-y-auto rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] shadow-2xl">
                                                {/* Header */}
                                                <div className="sticky top-0 flex items-center justify-between border-b border-white/10 bg-[var(--card-color)] px-5 py-4">

                                                    <div>
                                                        <h3 className="text-lg font-bold text-[var(--primary-color)]">
                                                            Order Items
                                                        </h3>

                                                        <p className="text-sm text-white/50">
                                                            {order.orderItems.length} Items
                                                        </p>
                                                    </div>

                                                    <button
                                                        onClick={() => setExpandedOrderId(null)}
                                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-xl text-white transition hover:bg-red-500 hover:text-white"
                                                    >
                                                        ✕
                                                    </button>

                                                </div>

                                                {/* Body */}
                                                <div className="space-y-3 p-5">

                                                    {order.orderItems.map((item) => ( 

                                                        <div
                                                            key={item.itemId}
                                                            className="rounded-xl border border-white/10 bg-[var(--background-color)] p-4"
                                                        >

                                                            <div className="flex items-start justify-between">

                                                                <div>

                                                                    <h4 className="font-semibold text-[var(--text-color)]">
                                                                        {item.itemName}
                                                                    </h4>

                                                                    <p className="mt-1 text-sm text-white/60">
                                                                        Qty: {item.quantity}
                                                                    </p>

                                                                    {item.variation && (
                                                                        <p className="text-sm text-white/60">
                                                                            Variant: {item.variation}
                                                                        </p>
                                                                    )}

                                                                </div>

                                                                <span className="rounded-lg bg-[var(--button-color)] px-3 py-1 font-semibold text-[var(--button-text-color)]">
                                                                    Rs. {item.price}
                                                                </span>

                                                            </div>

                                                        </div>

                                                    ))}

                                                </div>
                                            </div>
                                        </div>

                                    )}
                                </div>



                                {/* Button */}
                                <button
                                    onClick={() => {
                                        setShowOrderStatus(true);
                                        setSelectedOrder(order);
                                    }}
                                    className="w-full rounded-xl bg-[var(--button-color)] py-3 font-semibold text-[var(--button-text-color)] transition hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
                                >
                                    Edit Status
                                </button>
                            </div>
                        )
                )}
            </div>

            {showOrderStatus && selectedOrder && (
                <OrderStatusForm
                    order={selectedOrder}
                    setShowOrderStatus={setShowOrderStatus}
                />
            )}

        </div>

    )
}

export default Order;