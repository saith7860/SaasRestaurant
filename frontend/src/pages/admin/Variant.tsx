import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


// import { useEffect, useState } from "react"
// import { useDashboard } from "../../context/DashBoardContext"
// import api from "../../api/api";
// import VariantForm from "../../components/Admin/VariantForm";
// import type { variantType, ItemType } from "../../types/DashBoardtype";
// const Variant = () => {
//   const { items,refreshDashboardData } = useDashboard();
//   const [itemId, setItemId] = useState<string | null>(null);
//   const [variant, setVariant] = useState<variantType[] | null>(null);
//   const [showForm,setShowForm]=useState(false);
//   const [editVariant, setEditVariant] = useState<variantType | null>(null);
//   const deleteVariant = async (id: string) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this branch?"
//     );

//     if (!confirmDelete) return
//     const token = localStorage.getItem("token");

//     try {
//       await api.delete(`/api/variant/delete-variant/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//       await refreshDashboardData();
//     } catch (error) {
//       console.log('error in deletion', error);

//     }
//   }
//   useEffect(() => {
//     if (itemId) {
//       const filteredVariants = items.filter((item) => item._id == itemId);
//       setVariant(filteredVariants[0].variants);
//     }
//   }, [itemId])
//   console.log(variant);

//   return (
//     <div>

//       <div className="text-center font-bold sm:font-black text-xl sm:text-2xl md:text-3xl mb-10 " >Manage Variants</div>

//       <form className="flex flex-col lg:flex-row gap-8 border-2 border-[#F4B400]/30 rounded-lg p-5 mx-3" action="">

//         <label htmlFor="Select Item" className="text-[#984447] font-bold text-sm  sm:font-bold md:text-lg " >Select Item : </label>

//         <select name="itemId" id="itemId"
//           className="border border-white/30 text-[#F4B400] bg-[#984447] rounded-md px-2 py-1"
//           onChange={(e) => setItemId(e.target.value)}>

//           <option value="">Select Item</option>
//           {items?.map((item: ItemType) => (
//             <option key={item._id} value={item._id}>{item.name}</option>
//           ))}
//         </select>

//       </form>

//       {variant?.length > 0 && variant?.map((v: variantType) => (
//         <div key={v._id}>
//           <p>{v.variation}</p>
//           <p>{v.price}</p>
//           <button onClick={()=> setShowForm(true)}>Edit</button>
//           <button onClick={() => deleteVariant(v._id)}>Delete</button>
//         </div>
//       ))}
//       {itemId && <VariantForm itemId={itemId} variant={variant} />}
//     </div>
//   )
// }

// export default Variant;
import { useEffect, useState } from "react";
import { useDashboard } from "../../context/DashBoardContext";
import api from "../../api/api";
import VariantForm from "../../components/Admin/VariantForm";
import type { variantType, ItemType } from "../../types/DashBoardtype";

const Variant = () => {
  const { items, refreshDashboardData } = useDashboard();

  const [itemId, setItemId] = useState<string>("");
  const [variants, setVariants] = useState<variantType[]>([]);
  const [editVariant, setEditVariant] = useState<variantType | null>(null);

  const deleteVariant = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this variant?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/api/variant/delete-variant/${id}`);

      await refreshDashboardData();
      setEditVariant(null);
    } catch (error) {
      console.log("error in deletion", error);
    }
  };

  useEffect(() => {
    if (!itemId) {
      setVariants([]);
      return;
    }

    const selectedItem = items.find((item) => item._id === itemId);

    setVariants(selectedItem?.variants || []);
  }, [itemId, items]);

  const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemId(e.target.value);
    setEditVariant(null);
  };

  return (
    <div>
      <h3 className="text-center font-bold sm:font-black text-xl sm:text-2xl md:text-3xl mb-10">
        Manage Variants
      </h3>

      <form className="flex flex-row gap-8 border-2 border-[#F4B400]/30 rounded-lg p-5 mx-3 mb-8">
        <label
          htmlFor="itemId"
          className="text-[#984447] font-bold text-xl md:text-2xl"
        >
          Select Item :
        </label>

        <select
          name="itemId"
          id="itemId"
          value={itemId}
          className="border border-white/30 text-[#F4B400] bg-[#984447] rounded-md px-2 py-1 w-auto"
          onChange={handleItemChange}
        >
          <option value="">Select Item</option>

          {items?.map((item: ItemType) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </form>

          

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-3">
        {variants.length > 0 &&
          variants.map((v: variantType) => (

            <div key={v._id} className="relative border-2 border-[#F4B400]/30 rounded-lg p-5 mx-3 w-auto">

              <p className="font-bold text-xl sm:text-2xl">Variant : <span className="text-[#F4B400] font-light text-md"> {v.variation} </span> </p>
              <p className="font-bold text-xl md:text-2xl">Price : <span className="text-[#F4B400]"> {v.price} </span> </p>

              <div className="flex items-center justify-end gap-4 mt-6 ">
                <button className="text-2xl" onClick={() => setEditVariant(v)}>
                  <CiEdit />
                </button>

                <button className="text-2xl" onClick={() => deleteVariant(v._id)}>
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
      </div>

      {itemId && (
        <VariantForm
          itemId={itemId}
          editVariant={editVariant}
          onCancelEdit={() => setEditVariant(null)}
        />
      )}
    </div>
  );
};

export default Variant;