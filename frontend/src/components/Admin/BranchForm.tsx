
import { useState, useEffect } from "react";
import api from "../../api/api";
import { useDashboard } from "../../context/DashBoardContext";
import type { BranchType } from "../../types/DashBoardtype.js"
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
            console.log(err);
        }
    };
    return (



        <form onSubmit={handleBranchSubmit}>

            <div
                className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base md:text-lg bg-[var(--card-color)] border border-[var(--primary-color)]/20 rounded-2xl p-6 shadow-xl">

                <input
                    className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30" name="name" type="text" placeholder="Branch Name" value={formData.name} onChange={handleChange} />
                <input
                    className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30" name="address" type="text" placeholder="Branch Address" value={formData.address} onChange={handleChange} />
                <input
                    className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30" name="city" type="text" placeholder="City" value={formData.city} onChange={handleChange} />
                <input
                    className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30" name="contactNumber" type="tel" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
                <input
                    className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30" name="openingTime" type="time" placeholder="Opening Time" value={formData.openingTime} onChange={handleChange} />
                <input
                    className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30" name="closingTime" type="time" placeholder="Closing Time" value={formData.closingTime} onChange={handleChange} />
                <input
                    className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 outline-none transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30" name="deliveryFee" type="number" placeholder="Delivery Fee" value={formData.deliveryFee} onChange={handleChange} />

            </div>

            <div
                className="flex gap-4 mt-5 justify-end">
                <button
                    className="inline-flex items-center justify-center w-fit rounded-xl bg-[var(--button-color)] px-6 py-3 text-[var(--button-text-color)] font-semibold shadow-lg shadow-[var(--secondary-color)]/30 transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] hover:shadow-[var(--primary-color)]/40 active:scale-95"
                >
                    {branch ? "Update Branch" : "Add Branch"}
                </button>

                <button
                    className="inline-flex items-center justify-center w-fit rounded-xl border border-white/15 bg-transparent px-6 py-3 text-[var(--text-color)] font-semibold transition-all duration-300 hover:bg-[var(--card-color)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] active:scale-95" onClick={() => { setShowForm(false) }}>
                    Cancel
                </button>
            </div>
        </form>



    )
}

export default BranchForm;