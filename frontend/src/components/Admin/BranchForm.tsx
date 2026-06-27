
import { useState ,useEffect} from "react";
import api from "../../api/api";
import {useDashboard} from "../../context/DashBoardContext";
import type {BranchType} from "../../types/DashBoardtype.js"
const BranchForm = ({ branch,setShowForm }: {
    branch:BranchType | null;
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
    const {restaurant,refreshDashboardData}=useDashboard();
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
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleBranchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!restaurant?._id) return;

    const token = localStorage.getItem("token");

    try {
        if (branch?._id) {
            
            await api.patch(
                `/api/branch/update-branch/${branch._id}`,
                {
                    ...formData,
                    restaurant: restaurant._id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            await refreshDashboardData();
        } else {
            await api.post(
                "/api/branch/create-branch",
                {
                    ...formData,
                    restaurant: restaurant._id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
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



        <form  onSubmit={handleBranchSubmit}>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  text-sm sm:text-base md:text-lg bg-[#2A2633] p-5 rounded-lg">

                <input className="border border-white/30 rounded-md px-2" name="name" type="text" placeholder="Branch Name" value={formData.name} onChange={handleChange}/>
                <input className="border border-white/30 rounded-md px-2" name="address" type="text" placeholder="Branch Address" value={formData.address} onChange={handleChange} />
                <input className="border border-white/30 rounded-md px-2" name="city" type="text" placeholder="City" value={formData.city} onChange={handleChange}/>
                <input className="border border-white/30 rounded-md px-2" name="contactNumber" type="tel" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange}/>
                <input className="border border-white/30 rounded-md px-2" name="openingTime" type="time" placeholder="Opening Time" value={formData.openingTime} onChange={handleChange}/>
                <input className="border border-white/30 rounded-md px-2" name="closingTime" type="time" placeholder="Closing Time" value={formData.closingTime} onChange={handleChange}/>
                <input className="border border-white/30 rounded-md px-2" name="deliveryFee" type="number" placeholder="Delivery Fee" value={formData.deliveryFee} onChange={handleChange}/>

            </div>

            <div className="flex gap-4 mt-5 justify-end">
                <button className="inline w-fit bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer" type="submit">{branch ? "Update Branch" : "Add Branch"}</button>
                <button className="inline w-fit bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer" onClick={() => { setShowForm(false) }}>Cancel</button>
            </div>
        </form>



    )
}

export default BranchForm;