import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import handleApiError from "../../../api/handleError";
import DealItemSelector from "./DealItemSelector";
import DealImageUpload from "./DealImageUpload";
import { useDashboard } from "../../../context/DashBoardContext";
import api from "../../../api/api";
import type { Deals } from "../../../types/DashBoardtype";

interface DealFormProps {
  onCancel: () => void;
  deal?: Deals;
}

const DealForm = ({ onCancel, deal }: DealFormProps) => {
  const { restaurant, branches, refreshDashboardData } = useDashboard();
  const [errors, setErrors] = useState<Record<string, string>>({});

  console.log(restaurant?._id)

  const [formData, setFormData] =
    useState<Deals>({
      _id:"",
      restaurantId:"",
      image:{
        url:"",
        publicId:""
      },
      totalPrice:0,
      title: "",
      description: "",
      branchId: "",
      items:[]
    });



  useEffect(() => {
    if (!deal) {
      return;
    }

    console.log("Loading deal into form:", deal);

    setFormData({
      _id:deal._id,
      restaurantId:deal.restaurantId,
      image:deal.image,
      totalPrice:deal.totalPrice,
      title: deal.title || "",
      description: deal.description || "",
      branchId: deal.branchId || "",
      items: deal.items || [],
    });


    setDealImage(null);
  }, [deal]);



  const [dealImage, setDealImage] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!restaurant?._id || !formData.branchId) {
        alert("Restaurant id or branch id is missing. Please try again.");
        return;
      }
      if (formData.items.length === 0) {
        alert("Please add at least one item");
        return;
      }

      setSaving(true);

      const payload = new FormData();

      payload.append("title", formData.title);
      payload.append("description", formData.description);
      
      payload.append("branchId", formData.branchId);

      payload.append(
        "restaurantId",
        restaurant._id
      );
      console.log('items',formData.items)
      payload.append(
        "items",JSON.stringify(formData.items)
      );

      if (dealImage) {
        payload.append("image", dealImage);
      }

      const response = deal
        ? await api.put(
          `/api/deals/update-deal/${deal._id}`,
          payload
        )
        : await api.post(
          "/api/deals/create-deal",
          payload
        );
        console.log('response',response)

        console.log('data',payload)
      console.log(
        deal
          ? "Deal updated successfully:"
          : "Deal created successfully:",
        response.data
      );

      await refreshDashboardData();

      onCancel();

    } catch (error: any) {
      console.error(
        deal
          ? "Failed to update deal:"
          : "Failed to create deal:",
        error
      );

      const result = handleApiError(error);

      if (result?.fieldErrors) {
        setErrors(result.fieldErrors);
      }

    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="pb-10">

      {/* ========================================
          Header
      ======================================== */}

      <div className="mb-8 flex items-center justify-between gap-4">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
            Deals
          </p>

          <h1 className="text-3xl font-black text-[var(--text-color)]">
            {deal ? "Edit Deal" : "Create Deal"}
          </h1>
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-[var(--primary-color)]/15
            bg-[var(--card-color)]
            transition-all
            hover:border-[var(--primary-color)]
            hover:bg-[var(--primary-color)]/10
          "
        >
          <ArrowLeft size={19} />
        </button>

      </div>

      {/* ========================================
          Deal Information
      ======================================== */}

      <div
        className="
          rounded-2xl
          border
          border-[var(--primary-color)]/10
          bg-[var(--card-color)]
          p-6
          shadow-lg
        "
      >

        <h2 className="text-xl font-bold">
          Deal Information
        </h2>

        <p className="mt-1 text-sm text-[var(--text-color)]/60">
          Add the basic information for your deal.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          {/* Title */}

          <div className="md:col-span-2">

            <label className="mb-2 block text-sm font-semibold">
              Deal Title
            </label>

            <input
              type="text"
              value={formData.title}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  title: event.target.value,
                }))
              }
              placeholder="e.g. Student Deal"
              className="
                w-full
                rounded-xl
                border
                border-[var(--primary-color)]/15
                bg-[var(--background-color)]
                px-4
                py-3
                outline-none
                transition
                focus:border-[var(--primary-color)]
                focus:ring-2
                focus:ring-[var(--primary-color)]/10
              "
            />

          </div>
          {errors.title && <span className="text-red-500">{errors.title}</span>}
          {/* Branch */}

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Branch
            </label>

            <select
              value={formData.branchId}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  branchId: event.target.value,
                }))
              }
              className="
                w-full
                rounded-xl
                border
                border-[var(--primary-color)]/15
                bg-[var(--background-color)]
                px-4
                py-3
                outline-none
                transition
                focus:border-[var(--primary-color)]
                focus:ring-2
                focus:ring-[var(--primary-color)]/10
              "
            >

              <option value="">
                Select Branch
              </option>

              {branches.map((branch: any) => (
                <option
                  key={branch._id}
                  value={branch._id}
                >
                  {branch.name}
                </option>
              ))}

            </select>

          </div>
          {errors.branchId && <span className="text-red-500">{errors.branchId}</span>}


          {/* Description */}

          <div className="md:col-span-2">

            <label className="mb-2 block text-sm font-semibold">
              Deal Description
            </label>

            <textarea
              value={formData.description}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  description:
                    event.target.value,
                }))
              }
              placeholder="e.g. Enjoy a burger, fries and drink at a special price."
              rows={4}
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-[var(--primary-color)]/15
                bg-[var(--background-color)]
                px-4
                py-3
                outline-none
                transition
                focus:border-[var(--primary-color)]
                focus:ring-2
                focus:ring-[var(--primary-color)]/10
              "
            />

          </div>
          {errors.description && <span className="text-red-500">{errors.description}</span>}
        </div>

      </div>

      {/* ========================================
          Deal Image
      ======================================== */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-[var(--primary-color)]/10
          bg-[var(--card-color)]
          p-6
          shadow-lg
        "
      >

        <h2 className="text-xl font-bold">
          Deal Image
        </h2>

        <p className="mt-1 text-sm text-[var(--text-color)]/60">
          Add an attractive image for your customers.
        </p>

        <div className="mt-6">

          <DealImageUpload
            value={dealImage}
            onChange={setDealImage}
          />

        </div>

      </div>

      {/* ========================================
          Deal Items
      ======================================== */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-[var(--primary-color)]/10
          bg-[var(--card-color)]
          p-6
          shadow-lg
        "
      >

        <h2 className="text-xl font-bold">
          Deal Items
        </h2>

        <p className="mt-1 text-sm text-[var(--text-color)]/60">
          Select menu items, variants, and quantities.
        </p>

        <div className="mt-6">

          <DealItemSelector
            items={formData.items}
            setItems={(items) =>
              setFormData((prev) => ({
                ...prev,
                items,
              }))
            }
          />

        </div>

      </div>

      {/* ========================================
          Actions
      ======================================== */}

      <div className="mt-6 flex justify-end gap-3">

        {/* Cancel */}

        <button
          type="button"
          onClick={onCancel}
          disabled={saving}
          className="
            rounded-xl
            border
            border-[var(--primary-color)]/15
            px-5
            py-3
            font-semibold
            transition
            hover:bg-[var(--primary-color)]/5
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Cancel
        </button>

        {/* Save */}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={saving}
          className="
            rounded-xl
            bg-[var(--button-color)]
            px-6
            py-3
            font-semibold
            text-[var(--button-text-color)]
            shadow-lg
            transition-all
            hover:-translate-y-0.5
            hover:bg-[var(--primary-color)]
            hover:text-[var(--background-color)]
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {saving
            ? "Saving..."
            : deal
              ? "Update Deal"
              : "Save Deal"}
              
        </button>

      </div>

    </div>
  );
};

export default DealForm;