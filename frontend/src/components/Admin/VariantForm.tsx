import { useState } from "react"
import type { variantType } from "../../types/DashBoardtype"
import api from "../../api/api"
import handleApiError from "../../api/handleError";

const VariantForm = ({ itemId, variant }: {
  itemId: string,
  variant: variantType[] | null,
}) => {
  const [error, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    itemId: String(itemId),
    variation: "",
    price: "",

  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "number" ? Number(value) : value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
    try {

      if (!token) return;
      else {
        await api.post("/api/variant/create-variant",
          formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        )
      }
    } catch (error) {
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
  }
  console.log(error);

  return (
    <>
      <form className="flex flex-col lg:flex-row gap-8 border-2 border-[#F4B400]/30 rounded-lg p-5 mx-3" onSubmit={handleSubmit}>

        <label htmlFor="variation">Enter Variation:  </label>
        <input type="text" name="variation" value={formData.variation} onChange={handleChange} 
        className="border border-white/30 rounded-md px-2 w-full"/>
        {error.variation && <p className="text-red-500 text-sm">{error.variation}</p>}
        
        <label htmlFor="price">Enter Price:  </label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} 
        className="border border-white/30 rounded-md px-2 w-full"/>
        {error.price && <p className="text-red-500 text-sm">{error.price}</p>}
        
        <button type="submit">Add Variant</button>
        
        {/* <button >Cancel</button> */}
      </form>
    </>
  )
}

export default VariantForm