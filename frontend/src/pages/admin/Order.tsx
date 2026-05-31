import { useState } from "react";
import { useDashboard } from "../../context/DashBoardContext"
import OrderStatusForm from "../../components/Admin/OrderStatusForm";
import type { OrderType } from "../../types/DashBoardtype";
const Order = () => {
    const { orders } = useDashboard();
    const [showOrderStatus, setShowOrderStatus] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);



    return (
       
        <div className="overflow-x-auto">
            
            <div className="text-center font-bold sm:font-black text-xl sm:text-2xl md:text-3xl mb-10 " >Manage Orders</div>
            
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-[#2A2633] text-white">
                        <th className="p-3 text-left">Customer</th>
                        <th className="p-3 text-left">Phone</th>
                        <th className="p-3 text-left">Address</th>
                        <th className="p-3 text-left">Amount</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {orders?.map(
                        (order) =>
                            order.userId && (
                                <tr
                                    key={order._id}
                                    className="border-b border-white/20 hover:bg-[#2A2633]/50"
                                >
                                    <td className="p-3">{order.userId.name}</td>

                                    <td className="p-3">
                                        {order.userId.phone}
                                    </td>

                                    <td className="p-3 max-w-xs truncate">
                                        {order.deliveryAddress}
                                    </td>

                                    <td className="p-3">
                                        Rs. {order.totalAmount}
                                    </td>

                                    <td className="p-3">
                                        <span className="px-3 py-2 rounded-full bg-[#984447] text-white text-sm">
                                            {order.orderStatus}
                                        </span>
                                    </td>

                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => {
                                                setShowOrderStatus(true);
                                                setSelectedOrder(order);
                                            }}
                                            className="bg-[#984447] hover:bg-[#F4B400] active:scale-95 transition-all duration-200 py-2   rounded-xl font-bold w-30"
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
    )
}

export default Order;