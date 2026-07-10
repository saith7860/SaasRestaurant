
import { useState, useEffect } from "react";
import api from "../../api/api";
import { useDashboard } from "../../context/DashBoardContext";
import type { BranchType } from "../../types/DashBoardtype.js";
import handleApiError from "../../api/handleError.js";
const BranchForm = ({ branch, setShowForm }: {
    branch: BranchType | null;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        contactNumber: "",
        openingTime: "",
        closingTime: "",
        deliveryFee: "",
    });
      const [errors, setErrors] = useState<Record<string, string>>({});
    const { restaurant, refreshDashboardData } = useDashboard();
    //populating form if branch is selected
    useEffect(() => {
        if (branch) {
            setFormData({
                name: branch.name || "",
                address: branch.address || "",
                city: branch.city || "",
                contactNumber: branch.contactNumber || "",
                openingTime: branch.openingTime || "",
                closingTime: branch.closingTime || "",
                deliveryFee: branch.deliveryFee,
            });
        }
    }, [branch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleBranchSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!restaurant?._id) return;

        try {
            if (branch?._id) {

                await api.patch(
                    `/api/branch/update-branch/${branch._id}`,
                    {
                        ...formData,
                        restaurant: restaurant._id,
                    }
                );
                await refreshDashboardData();
            } else {
                await api.post(
                    "/api/branch/create-branch",
                    {
                        ...formData,
                        restaurant: restaurant._id,
                    }
                );
            }
            await refreshDashboardData();
            setShowForm(false);
        } catch (err) {
               const validationErrors = handleApiError(err);

      if (validationErrors) {
        const formattedErrors: Record<string, string> = {};

        validationErrors.forEach((err: any) => {
          formattedErrors[err.field] = err.message;
        });

        setErrors(formattedErrors);
      }
        }
    };
    return (



        <form onSubmit={handleBranchSubmit} className="mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-2xl shadow-black/30">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--primary-color)]">
                        Branch Name
                    </label>

                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Branch Name"
                        className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30"
                    />
                </div>
            {errors.name && <span className="text-red-500">{errors.name}</span>}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--primary-color)]">
                        Contact Number
                    </label>

                    <input
                        name="contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="03XXXXXXXXX"
                        className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30"
                    />
                </div>
    {errors.contactNumber && <span className="text-red-500">{errors.contactNumber}</span>}
                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-[var(--primary-color)]">
                        Branch Address
                    </label>

                    <input
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Branch Address"
                        className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30"
                    />
                </div>
{errors.address && <span className="text-red-500">{errors.address}</span>}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--primary-color)]">
                        City
                    </label>

                    <input
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter City"
                        className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30"
                    />
                </div>
 {errors.city && <span className="text-red-500">{errors.city}</span>}               
                {/* Opening Time */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--primary-color)]">
                        Opening Time
                    </label>

                    <input
                        name="openingTime"
                        type="text"
                        value={formData.openingTime}
                        onChange={handleChange}
                        placeholder="Enter Opening Time"
                        className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30"
                    />
                  </div>
 {errors.openingTime && <span className="text-red-500">{errors.openingTime}</span>}
      {/* Closing Time */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--primary-color)]">
                        Opening Time
                    </label>

                    <input
                        name="closingTime"
                        type="text"
                        value={formData.closingTime}
                        onChange={handleChange}
                        placeholder="Enter Closing Time"
                        className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30"
                    />
                  </div>
 {errors.closingTime && <span className="text-red-500">{errors.closingTime}</span>}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--primary-color)]">
                        Delivery Fee
                    </label>

                    <input
                        name="deliveryFee"
                        type="number"
                        value={formData.deliveryFee}
                        onChange={handleChange}
                        placeholder="Rs 150"
                        className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30"
                    />
                </div>
{errors.deliveryFee && <span className="text-red-500">{errors.deliveryFee}</span>}
            </div>

            <div
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button
                    className="flex flex-1 justify-center rounded-xl bg-[var(--button-color)] px-6 py-3 text-lg font-semibold text-[var(--button-text-color)] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-black"
                >
                    {branch ? "Update Branch" : "Add Branch"}
                </button>

                <button
                    className="flex flex-1 justify-center rounded-xl border border-white/15 bg-transparent px-6 py-3 text-lg font-semibold text-[var(--text-color)] transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-black"
                    onClick={() => { setShowForm(false) }}>
                    Cancel
                </button>
            </div>
        </form>



    )
}

export default BranchForm;