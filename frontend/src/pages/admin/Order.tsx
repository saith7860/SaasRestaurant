import { useState } from "react";
import { useDashboard } from "../../context/DashBoardContext"
import OrderStatusForm from "../../components/Admin/OrderStatusForm";
import type { OrderType } from "../../types/DashBoardtype";
const Order = () => {
  const {orders}=useDashboard();
  const [showOrderStatus,setShowOrderStatus]=useState(false);
  const [selectedOrder,setSelectedOrder]=useState<OrderType|null>(null);

  
  return (
    <div>
        <div className="flex flex-col gap-2">
            {orders?.map((order) => (order.userId!=null &&
                <div key={order._id} className="bg-[#171219] rounded-xl p-4 flex justify-between items-center">
                    <div className="flex gap-2">
                        
                        <h2 className="text-lg font-bold">{order.userId?.name}</h2>
                        <p className="text-sm text-gray-500">{order.userId?.phone}</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-sm text-gray-500">{order.deliveryAddress}</p>
                        <p className="text-sm text-gray-500">{order.totalAmount}</p>
                        <p className="text-sm text-gray-500">{order.orderStatus}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={()=>{setShowOrderStatus(true);
                            setSelectedOrder(order)}} className="bg-[#984447] hover:bg-[#F4B400] active:scale-95 transition-all duration-200 py-2 px-4 rounded-xl font-bold">
                            Edit Status
                        </button>
                   
                    </div>
                </div>
            ))}
        </div>
       {showOrderStatus&&selectedOrder&&(
        <OrderStatusForm  order={selectedOrder} setShowOrderStatus={setShowOrderStatus}/> 
       )}

    </div>
  )
}

export default Order;