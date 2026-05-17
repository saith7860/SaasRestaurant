
import { useState ,useEffect} from "react";
import api from "../../api/api";
import {useDashboard} from "../../context/DashBoardContext";
import type {Branch} from "../../types/DashBoardtype.js"
const BranchForm = ({ branch,setShowForm }: {
    branch:Branch | null;
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
    const {restaurant}=useDashboard();
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

        setShowForm(false);
    } catch (err) {
        console.log(err);
    }
};
    return (



        <form onSubmit={handleBranchSubmit}>
            <input name="name" type="text" placeholder="Branch Name" value={formData.name} onChange={handleChange}/>
            <input name="address" type="text" placeholder="Branch Address" value={formData.address} onChange={handleChange} />
            <input name="city" type="text" placeholder="City" value={formData.city} onChange={handleChange}/>
            <input name="contactNumber" type="text" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange}/>
            <input name="openingTime" type="text" placeholder="Opening Time" value={formData.openingTime} onChange={handleChange}/>
            <input name="closingTime" type="text" placeholder="Closing Time" value={formData.closingTime} onChange={handleChange}/>
            <input name="deliveryFee" type="number" placeholder="Delivery Fee" value={formData.deliveryFee} onChange={handleChange}/>
            <button type="submit">{branch ? "Update Branch" : "Add Branch"}</button>
            <button onClick={() => { setShowForm(false) }}>Cancel</button>
        </form>



    )
}

export default BranchForm;