
import { useDashboard } from "../../context/DashBoardContext"
const Order = () => {
  const {orders}=useDashboard();
   

  
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
                        <button className="bg-[#984447] hover:bg-[#F4B400] active:scale-95 transition-all duration-200 py-2 px-4 rounded-xl font-bold">
                            Edit Status
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Order;