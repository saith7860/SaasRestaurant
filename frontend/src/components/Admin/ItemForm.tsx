import { useState, useEffect } from "react";
import api from "../../api/api";
import handleApiError from "../../api/handleError";
import type {
  CategoryType,
  ItemType,
  Restaurant,
  BranchType,
} from "../../types/DashBoardtype";
import { useDashboard } from "../../context/DashBoardContext";
import LoadingButton from "../LoadingState/LoadingState";
const ItemForm = ({
  setShowForm,
  item,
  category,
  restaurant,
  branches,
}: {
  category: CategoryType[] | null;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  item: ItemType | null;
  restaurant: Restaurant | null;
  branches: BranchType[] | null;
}) => {
  const [errors, setErrors] = useState<Record<string, string|null>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);


  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    categoryId: string;
    basePrice: string;
    branchId: string;
    image: { url?: string; publicId?: string } |null;
  }>({
    name: "",
    description: "",
    categoryId: "",
    basePrice: "",
    branchId: "",
    image: null
  });

  const { refreshDashboardData } = useDashboard();

  const getId = (value: any) => {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value._id || "";
  };


  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || "",
        description: item.description || "",
        categoryId: getId(item.categoryId),
        basePrice: String(item.basePrice || ""),
        branchId: getId(item.branchId),
        image: item.image
          ? {
            url: item.image.url,
            publicId: item.image.publicId,
          }
          : null
      });
    }
  }, [item]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    } as any);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImageFile(file);


    setErrors((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!restaurant?._id) return;
    setIsLoading(true);
    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("basePrice", formData.basePrice);
      data.append("categoryId", formData.categoryId);
      data.append("branchId", formData.branchId);
      data.append("restaurantId", restaurant._id);

      if (imageFile) {
        data.append("image", imageFile);
      }

      if (item?._id) {
        await api.put(`/api/item/update-item/${item._id}`, data);
      } else {
        await api.post("/api/item/create-item", data);
      }

      await refreshDashboardData();
      setShowForm(false);
    } catch (error) {
      const result = handleApiError(error);

      if (result?.fieldErrors) {
        setErrors(result.fieldErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };
  const buttonText = isLoading
    ? item
        ? "Updating Item..."
        : "Adding Item..."
    : item
        ? "Update Item"
        : "Add Item";
  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-2xl">

        <form
          className="mx-auto mt-8 w-full max-w-3xl rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-4 sm:p-6 shadow-2xl shadow-black/30 backdrop-blur-sm"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start sm:grid grid-cols-[1fr_5fr] sm:items-center gap-2 mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-[var(--primary-color)] sm:text-base"
            >
              Item Name :
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Item Name"
              className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30 focus:outline-none"
            />

            <p className="mt-1 min-h-5 text-sm text-red-500">
              {errors.name && <span>{errors.name}</span>}
            </p>

          </div>

          <div className="flex flex-col items-start sm:grid grid-cols-[1fr_5fr] sm:items-center gap-2 mb-5">
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-semibold text-[var(--primary-color)] sm:text-base"
            >
              Item Image :
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full cursor-pointer rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--button-color)] file:px-4 file:py-2 file:font-medium file:text-[var(--button-text-color)] hover:file:bg-[var(--primary-color)] hover:file:text-black"
            />
            {formData.image && (
              <img
                src={formData.image.url}
                alt="Current item"
                className="w-32 h-32 rounded object-cover mb-3"
              />
            )}

            <p className="mt-1 min-h-5 text-sm text-red-500">
              {errors.image && (<span>{errors.image}</span>)}
            </p>

          </div>

          <div className="flex flex-col items-start sm:grid grid-cols-[1fr_4fr] sm:items-center gap-2 mb-5">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-[var(--primary-color)] sm:text-base"
            >
              Item Description :
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Item Description"
              className="min-h-12 max-h-15 overflow-y-hidden w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30 focus:outline-none"
            />

            <p className="mt-1 min-h-5 text-sm text-red-500">
              {errors.description && (<span>{errors.description}</span>)}
            </p>

          </div>

          <div className="flex flex-col items-start sm:grid grid-cols-[1fr_5fr] sm:items-center gap-2 mb-5">
            <label
              htmlFor="basePrice"
              className="mb-2 block text-sm font-semibold text-[var(--primary-color)] sm:text-base"
            >
              Base Price :
            </label>

            <input
              type="number"
              name="basePrice"
              value={formData.basePrice}
              onChange={handleChange}
              placeholder="Enter Base Price"
              className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30 focus:outline-none"
            />

            <p className="mt-1 min-h-5 text-sm text-red-500">
              {errors.basePrice && (<span>{errors.basePrice}</span>)}
            </p>

          </div>

          <hr className="my-5 border-[var(--primary-color)]/15" />

          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label
              htmlFor="categoryId"
              className="text-sm font-semibold text-[var(--primary-color)] sm:text-base"
            >
              Category :
            </label>

            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  categoryId: e.target.value,
                })
              }
              className="rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30 focus:outline-none"
            >

              <option value="">Select Category</option>

              {category?.map((cat: CategoryType) => (
                <option key={cat._id} value={cat._id}>
                  {cat.category}
                </option>
              ))}
            </select>

            <p className="mt-1 min-h-5 text-sm text-red-500">

              {errors.categoryId && (<span>{errors.categoryId}</span>)}
            </p>

          </div>

          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label
              htmlFor="branchId"
              className="text-sm font-semibold text-[var(--primary-color)] sm:text-base"
            >
              Branch :
            </label>

            <select
              name="branchId"
              value={formData.branchId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  branchId: e.target.value,
                })
              }
              className="rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30 focus:outline-none"
            >
              <option value="">Select Branch</option>

              {branches?.map((branch: BranchType) => (
                <option key={branch._id} value={branch._id}>
                  {branch.name}
                </option>
              ))}
            </select>

            <p className="mt-1 min-h-5 text-sm text-red-500">
              {errors.branchId && (
                <span>{errors.branchId}</span>
              )}
            </p>

          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {/* <button
              type="submit"
              className="flex flex-1 justify-center rounded-xl bg-[var(--button-color)] px-6 py-3 text-lg font-semibold text-[var(--button-text-color)] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-black"
            >
              {item ? "Update Item" : "Add Item"}
            </button> */}
      <LoadingButton loading={isLoading} type="submit">{buttonText}</LoadingButton>
            <button
              type="button"
              disabled={isLoading}
              className="flex flex-1 justify-center rounded-xl border border-white/15 bg-transparent px-6 py-3 text-lg font-semibold text-[var(--text-color)] transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-black"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;