

const OrderSummary = ({deliveryFee,total}:{
    deliveryFee:number;
    total:number;
}) => {
  return (
     <>
                <div className="bg-[#2A2633] rounded-3xl p-6 my-auto shadow-lg w-full">

                    <h2 className="text-2xl font-black text-[#F4B400] mb-6">
                        Order Summary
                    </h2>

                    <div className="flex flex-col gap-4 text-lg">

                        <div className="flex justify-between">
                            <span className="text-gray-300">Subtotal</span>
                            <span>Rs. {total}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-300">Delivery Fee</span>
                            <span>Rs. {deliveryFee}</span>
                        </div>

                        <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl">
                            <span>Total</span>
                            <span className="text-[#F4B400]">
                                Rs. {total + deliveryFee}
                            </span>
                        </div>
                    </div>
                </div>
                </>
  )
}

export default OrderSummary