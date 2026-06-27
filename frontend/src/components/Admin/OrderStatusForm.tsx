import api from "../../api/api"
import { useState } from "react"
import type { OrderType } from "../../types/DashBoardtype"
import { useDashboard } from "../../context/DashBoardContext"
const OrderStatusForm = ({ order, setShowOrderStatus }: {
  order: OrderType,
  setShowOrderStatus: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [formData,setFormData]=useState({
    id:order._id || '',
    orderStatus:order.orderStatus||'pending'
  });
  //refreseh data after changing status
  const {refreshDashboardData}=useDashboard();
  //onSubmit function to change status of order
  const ChangeOrderStatus=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      const token=localStorage.getItem("token");
      const res=await api.patch("/api/order/update-order-status",formData,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      if (res.status==200) {
        alert("Order status updated successfully");
        setShowOrderStatus(false);
        await refreshDashboardData();
      }
    } catch (error) {
      console.log("error updating order status",error);
    }
  }
  console.log(formData);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 bg-opacity-50 z-50 mx-auto">
      <div className="bg-[#171219] rounded-xl p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">Order Status</h2>
        <p className="text-sm text-gray-500">{order.orderStatus}</p>
        <form
          onSubmit={ChangeOrderStatus}
          className="flex flex-col gap-4 mx-auto"
        >
          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-2">Select Status</label>
            <select
              name="orderStatus"
              value={formData.orderStatus}
              onChange={(e) => {
                setFormData({...formData,orderStatus:e.target.value})
              }}
              // className="px-3 py-2 rounded-md bg-[#2A2633] text-white outline-none border border-gray-600 focus:border-[#984447]"
              className="border border-white/30 text-[#F4B400] bg-[#984447] rounded-md px-2 py-1"

            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="out_for_delivery">Out for Delivery</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={() => setShowOrderStatus(false)}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 transition text-white rounded-md"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-[#984447] hover:bg-[#F4B400] transition text-white rounded-md"
            >
              Update Status
            </button>
          </div>
        </form>
      </div>

    </div>

  )
}

export default OrderStatusForm;