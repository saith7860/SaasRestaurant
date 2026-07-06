

const OrderSummary = ({deliveryFee,total}:{
    deliveryFee:number;
    total:number;
}) => {
  return (
     <>
                <div className="w-full rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-xl transition-all duration-300">

                    <h2 className="mb-6 text-2xl font-extrabold tracking-wide text-[var(--primary-color)]">
                        Order Summary
                    </h2>

                    <div className="flex flex-col gap-5 text-base sm:text-lg">

                        <div className="flex items-center justify-between">
                            <span className="text-white/70">Subtotal</span>
                            <span className="font-semibold text-[var(--text-color)]">Rs. {total}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-white70">Delivery Fee</span>
                            <span className="font-semibold text-[var(--text-color)]">Rs. {deliveryFee}</span>
                        </div>

                        <div className="mt-2 flex items-center justify-between border-t border-[var(--primary-color)]/20 pt-5 text-xl font-bold">
                            <span>Total</span>
                            <span className="text-2xl font-extrabold text-[var(--primary-color)]">
                                Rs. {total + deliveryFee}
                            </span>
                        </div>
                    </div>
                </div>
                </>
  )
}

export default OrderSummary