import api from "../../api/api.js";
import { useState } from "react"
import { useDashboard } from "../../context/DashBoardContext"
import BranchForm from "../../components/Admin/BranchForm";
import type {Branch} from "../../types/DashBoardtype.js"
const Branch = () => {
  const [showForm,setShowForm]=useState(false);
 const [selectedBranch, setSelectedBranch]=useState<Branch | null>(null);
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
        <div key={branch._id}>
            <div><h4>Name:</h4>{branch.name}</div>
            <div><h4>Address:</h4>{branch.address}</div>
            <div><h4>City:</h4>{branch.city}</div>
            <div><h4>Contact Number:</h4>{branch.contactNumber}</div>
            <div><h4>Opening Time:</h4>{branch.openingTime}</div>
            <div><h4>Closing Time:</h4>{branch.closingTime}</div>
            <div>{branch.deliveryFee}</div>
            <button onClick={()=>{
              setShowForm(true);
              setSelectedBranch(branch)}}>Edit</button>
            <button onClick={()=>{
              handleDelete(branch._id)
            }}>Delete</button>
        </div>
    ))}
    <button onClick={()=>{
      setSelectedBranch(null);
      setShowForm(true)}}>Add Branch</button>
    {showForm && (
      <div>
        <BranchForm setShowForm={setShowForm} branch={selectedBranch}/>
      </div>
    )}
        
    </div>
  )
}

export default Branch;