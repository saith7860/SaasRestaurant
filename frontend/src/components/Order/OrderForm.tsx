
import { toast } from "react-toastify";
import api from "../../api/api";
import { useContext, useState } from "react";
import handleApiError from "../../api/handleError";
import { CartContext } from "../../context/CartContext";
import { useRestaurant } from "../../context/RestaurantContext";

const OrderForm = ({ formData, handleChange, total, orderData }) => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { setCart } = useContext(CartContext);
    const {restaurantData}=useRestaurant();

    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (total === 0) {
            toast.error("Your cart is empty")
            return
        }
        try {
            const res = await api.post(
                `/api/order/create`,
                {...orderData,restaurantId:restaurantData.restaurantData?._id,branchId:restaurantData.branches[0]._id}
            )
            console.log(res.data);
            
            toast.success("Your order is placed.Restaurant will confirm it now")
            setCart([]);
            setErrors({});
        } catch (error: any) {
            console.error("Signup error:", error);
            const validationErrors = handleApiError(error);

            if (validationErrors) {

                const formattedErrors:
                    Record<string, string> = {};

                validationErrors.forEach(
                    (err: any) => {

                        formattedErrors[err.field] =
                            err.message;
                    }
                );

                setErrors(formattedErrors);
            }
        }

    };
    console.log('errors ',errors);
    
    return (
        <>

            <h1 className="text-4xl font-black text-[#F4B400] mb-6 text-center">
                Checkout
            </h1>

            <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid  grid-cols-2 gap-10 items-start">

                {/* Checkout Form */}
                <div className=" rounded-3xl p-6 shadow-lg w-full">

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">


                        {/* Address */}
                        <div className="flex flex-col gap-2">
                            <label className="text-md  text-bold text-[#F4B400]">
                                Full Delivery Address
                            </label>

                            <textarea
                                name="deliveryAddress"
                                rows={1}
                                placeholder="Enter delivery address"
                                value={formData.deliveryAddress}
                                onChange={handleChange}
                                className="
                w-full
                rounded-xl
                bg-[#171219]
                px-4
                py-3
                outline-none
                border border-gray-700
                focus:border-[#F4B400]
                transition
                resize-none
              "
                            />
                        </div>
                        {
                            errors.deliveryAddress && <p className="text-red-500 text-2xl">{errors.deliveryAddress}</p>
                        }
{/* Customer Email */}
<div>
    <label className="text-md  text-bold text-[#F4B400]">
        Customer Email
    </label>
    <input
        type="text"
        name="customerEmail"
        value={formData.customerEmail}
        onChange={handleChange}
        className="
                w-full
                rounded-xl
                bg-[#171219]
                px-4
                py-3
                outline-none
                border border-gray-700
                focus:border-[#F4B400]
                transition
              "
    />
</div>
{errors.customerEmail && <p className="text-red-500 text-2xl">{errors.customerEmail}</p>}

                        {/* Payment Method */}
                        <div className="flex flex-col gap-3">

                            <h3 className="font-semibold text-lg text-[#F4B400]">
                                Payment Method
                            </h3>

                            <label className="
              flex items-center gap-3
              bg-[#171219]
              border border-gray-700
              rounded-xl
              px-4 py-3
              cursor-pointer
            ">

                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="COD"
                                    checked={formData.paymentMethod === "COD"}
                                    onChange={handleChange}
                                    className="accent-[#F4B400] w-4 h-4"
                                />

                                <span>Cash on Delivery</span>

                            </label>
                        </div>
                        {
                            errors.paymentMethod && <p className="text-red-500 text-2xl">{errors.paymentMethod}</p>
                        }
                        {/* Submit Button */}
                        <button   type="submit"   className="
              mt-4
              bg-[#984447]
              hover:bg-[#F4B400]
              active:scale-95
              transition-all
              duration-200
              py-3
              rounded-xl
              font-bold
              text-lg
            "  >
                            Place Order
                        </button>
                    </form>
                </div>


            </div>
        </>
    )
}

export default OrderForm