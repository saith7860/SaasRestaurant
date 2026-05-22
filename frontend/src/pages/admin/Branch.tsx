import api from "../../api/api.js";
import { useState } from "react"
import { useDashboard } from "../../context/DashBoardContext"
import BranchForm from "../../components/Admin/BranchForm";
import type {BranchType} from "../../types/DashBoardtype.js"
const Branch = () => {
  const [showForm,setShowForm]=useState(false);
 const [selectedBranch, setSelectedBranch]=useState<BranchType | null>(null);
  const {branches,setBranches}=useDashboard();
  const handleDelete=async(id:string)=>{
     const confirmDelete = window.confirm(
    "Are you sure you want to delete this branch?"
  );

  if (!confirmDelete) return
    try {
      const token=localStorage.getItem("token");
      await api.delete(`/api/branch/delete-branch/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setBranches(branches.filter((branch)=>branch._id!==id))
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
    {branches?.map((branch)=>(
        <div className="flex flex-col gap-3 text-sm sm:text-base md:text-lg bg-[#2A2633] p-5 mt-5 rounded-lg" key={branch._id}>
            <div className="flex gap-2"><h4>Name: </h4>{branch.name}</div>
            <div className="flex gap-2"><h4>Address: </h4>{branch.address}</div>
            <div className="flex gap-2"><h4>City: </h4>{branch.city}</div>
            <div className="flex gap-2"><h4>Contact Number: </h4>{branch.contactNumber}</div>
            <div className="flex gap-2"><h4>Opening Time: </h4>{branch.openingTime}</div>
            <div className="flex gap-2"><h4>Closing Time: </h4>{branch.closingTime}</div>
            <div className="flex gap-2"><h4>Delivery Fee: </h4>{branch.deliveryFee}</div>
            
            <div className="flex items-center gap-4 justify-end">

              <div className="w-fit bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer">
                  <button onClick={()=>{
                    setShowForm(true);
                    setSelectedBranch(branch)}}>Edit</button>
              </div>
          
              <div className="inline w-fit bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer">
                <button onClick={()=>{
                  handleDelete(branch._id)
                }}>Delete</button>
              </div>
            </div>
        </div>
    ))}


    {showForm && (
      <div>
        <BranchForm setShowForm={setShowForm} branch={selectedBranch}/>
      </div>
    )}

    <button className=" bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer mt-10 flex justify-center mx-auto" onClick={()=>{
      setSelectedBranch(null);
      setShowForm(true)}}>Add Branch</button>

    </div>
  )
}

export default Branch;