import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import DealItemSelector from "./DealItemSelector";
import DealImageUpload from "./DealImageUpload";

interface DealItem {
  itemId: string;
  variantId?: string;
  quantity: number;
}

interface DealFormData {
  title: string;
  totalPrice: number;
  isAvailable: boolean;
  items: DealItem[];
}

interface DealFormProps {
  onCancel: () => void;
}

const DealForm = ({ onCancel }: DealFormProps) => {
  const [formData, setFormData] = useState<DealFormData>({
    title: "",
    totalPrice: 0,
    isAvailable: true,
    items: [],
  });

  const [dealImage, setDealImage] = useState<File | null>(null);

  return (
    <div className="pb-10">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between gap-4">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
            Deals
          </p>

          <h1 className="text-3xl font-black text-[var(--text-color)]">
            Create Deal
          </h1>
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
            border border-[var(--primary-color)]/15
            bg-[var(--card-color)]
            transition-all
            hover:border-[var(--primary-color)]
            hover:bg-[var(--primary-color)]/10
          "
        >
          <ArrowLeft size={19} />
        </button>


      </div>

      {/* Deal Information */}
      <div className="
        rounded-2xl
        border border-[var(--primary-color)]/10
        bg-[var(--card-color)]
        p-6
        shadow-lg
      ">

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
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              placeholder="e.g. Student Deal"
              className="
                w-full
                rounded-xl
                border border-[var(--primary-color)]/15
                bg-[var(--background-color)]
                px-4 py-3
                outline-none
                focus:border-[var(--primary-color)]
              "
            />

          </div>

          {/* Price */}
          <div>

            <label className="mb-2 block text-sm font-semibold">
              Deal Price
            </label>

            <input
              type="number"
              min="0"
              value={formData.totalPrice}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  totalPrice: Number(e.target.value),
                }))
              }
              placeholder="1500"
              className="
                w-full
                rounded-xl
                border border-[var(--primary-color)]/15
                bg-[var(--background-color)]
                px-4 py-3
                outline-none
                focus:border-[var(--primary-color)]
              "
            />

          </div>

          {/* Availability */}
          <div>

            <label className="mb-2 block text-sm font-semibold">
              Availability
            </label>

            <select
              value={String(formData.isAvailable)}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  isAvailable: e.target.value === "true",
                }))
              }
              className="
                w-full
                rounded-xl
                border border-[var(--primary-color)]/15
                bg-[var(--background-color)]
                px-4 py-3
                outline-none
                focus:border-[var(--primary-color)]
              "
            >
              <option value="true">
                Active
              </option>

              <option value="false">
                Inactive
              </option>

            </select>

          </div>

        </div>

      </div>

      {/* Deal Image */}
      <div className="mt-6 rounded-2xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] p-6 shadow-lg">
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

      {/* Deal Items */}
      <div className="
        mt-6
        rounded-2xl
        border border-[var(--primary-color)]/10
        bg-[var(--card-color)]
        p-6
        shadow-lg
      ">

        <h2 className="text-xl font-bold">
          Deal Items
        </h2>

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

      {/* Actions */}
      <div className="mt-6 flex justify-end gap-3">

        <button
          type="button"
          onClick={onCancel}
          className="
            rounded-xl
            border border-[var(--primary-color)]/15
            px-5 py-3
            font-semibold
            hover:bg-[var(--primary-color)]/5
          "
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={() => {
            console.log("Deal Data:", formData);
            console.log("Deal Image:", dealImage);
          }}
          className="
            rounded-xl
            bg-[var(--button-color)]
            px-6 py-3
            font-semibold
            text-[var(--button-text-color)]
            shadow-lg
            transition-all
            hover:-translate-y-0.5
            hover:bg-[var(--primary-color)]
            hover:text-[var(--background-color)]
          "
        >
          Save Deal
        </button>

      </div>

    </div>
  );
};

export default DealForm;