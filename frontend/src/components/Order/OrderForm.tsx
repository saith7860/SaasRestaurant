
import { toast } from "react-toastify";
import api from "../../api/api";
import { useContext, useState } from "react";
import handleApiError from "../../api/handleError";
import { CartContext } from "../../context/CartContext";
import { useRestaurant } from "../../context/RestaurantContext";

const OrderForm = ({ formData, handleChange, total,orderData }:{formData:any,handleChange:any,total:number,orderData:any}) => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { cart,setCart } = useContext(CartContext);
    const { restaurantData } = useRestaurant();


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (cart.length === 0) {
            toast.error("Your cart is empty")
            return
        }
        try {
            const data={...orderData,orderItems:cart,restaurantId: restaurantData.restaurantData?._id, branchId: restaurantData.branches[0]._id}
            console.log("data is ",data);
            
            const res = await api.post(
                `/api/order/create`,data
                
            )
            console.log(res.data);

            toast.success("Your order is placed.Restaurant will confirm it now")
            setCart([]);
            setErrors({});
        } catch (error: any) {
            console.error("Signup error:", error);
    const result = handleApiError(error);

    if (result?.fieldErrors) {
        setErrors(result.fieldErrors);
    }
        }

    };
    console.log('errors ', errors);

    return (
        <>



            {/* Checkout Form */}
            <div className="w-full rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-xl">

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">


                    {/* Address */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold tracking-wide text-[var(--primary-color)]">
                            Full Delivery Address
                        </label>

                        <textarea
                            name="deliveryAddress"
                            rows={1}
                            placeholder="Enter delivery address"
                            value={formData.deliveryAddress}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10  bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] outline-none transition-all duration-200 placeholder:text-white/40 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 resize-none "
                        />
                    </div>


                    {
                        errors.deliveryAddress && <p className="text-red-500 text-2xl">{errors.deliveryAddress}</p>
                    }

                    {/* Customer Email */}
                    <div>
                        <label className="text-sm font-semibold tracking-wide text-[var(--primary-color)]">
                            Customer Email
                        </label>
                        <input
                            type="text"
                            name="customerEmail"
                            value={formData.customerEmail}
                            onChange={handleChange}
                            className=" w-full rounded-xl border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] outline-none transition-all duration-200 placeholder:text-white/40 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 "
                        />
                    </div>

                    {errors.customerEmail && <p className="text-red-500 text-2xl">{errors.customerEmail}</p>}


                    {/* Payment Method */}
                    <div className="flex flex-col gap-3">

                        <h3 className="text-lg font-bold tracking-wide text-[var(--primary-color)]">
                            Payment Method
                        </h3>

                        <label
                            className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[var(--background-color)] px-4 py-3 transition-all duration-200 hover:border-[var(--primary-color)]/40 hover:bg-[var(--card-color)] ">

                            <input
                                type="radio"
                                name="paymentMethod"
                                value="COD"
                                checked={formData.paymentMethod === "COD"}
                                onChange={handleChange}
                                className="h-4 w-4 accent-[var(--primary-color)]"
                            />

                            <span className="font-medium text-[var(--text-color)]">
                                Cash on Delivery
                            </span>

                        </label>
                    </div>
                    {
                        errors.paymentMethod && <p className="text-sm font-medium text-red-400">{errors.paymentMethod}</p>
                    }
                    {/* Submit Button */}
                    <button type="submit"
                        className="mt-2 rounded-xl bg-[var(--button-color)] py-3 text-lg font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95 " >
                        Place Order
                    </button>
                </form>
            </div>


        </>
    )
}

export default OrderForm