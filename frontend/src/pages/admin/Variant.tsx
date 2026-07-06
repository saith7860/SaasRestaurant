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
      <h3 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-[var(--primary-color)] sm:text-3xl">
        Manage Variants
      </h3>

      <form className="mx-3 mb-8 flex flex-col gap-5 rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-lg md:flex-row md:items-center">
        <label
          htmlFor="itemId"
         className="text-lg font-semibold text-[var(--primary-color)] md:text-xl"
        >
          Select Item :
        </label>

        <select
          name="itemId"
          id="itemId"
          value={itemId}
          className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 md:w-72"
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

          

      <div className="my-6 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {variants.length > 0 &&
          variants.map((v: variantType) => (

            <div key={v._id} className="relative mx-3 rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-color)]/50 hover:shadow-2xl">

              <p className="text-xl font-bold text-[var(--text-color)]">Variant : <span className="font-medium text-[var(--primary-color)]"> {v.variation} </span> </p>
              <p className="mt-3 text-xl font-bold text-[var(--text-color)]">Price : <span className="text-[var(--primary-color)]"> {v.price} </span> </p>

              <div className="mt-6 flex items-center justify-end gap-3 border-t border-white/10 pt-4">
                <button className="rounded-lg bg-[var(--button-color)] p-2 text-xl text-[var(--button-text-color)] transition-all duration-200 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]" onClick={() => setEditVariant(v)}>
                  <CiEdit />
                </button>

                <button className="rounded-lg border border-red-500/20 p-2 text-xl text-red-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-300" onClick={() => deleteVariant(v._id)}>
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