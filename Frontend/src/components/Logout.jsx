import React from 'react'
import { useAuth } from '../context/Auth'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{
            setAuthUser(null);
            localStorage.removeItem("Users")
            toast.success("Logout Success")
            window.location.reload();
        }catch(error){
            toast.error("Error :" + error.message)
        }
    }
  return (
    <div>
        <button
        className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer'
        onClick={handleLogout}  // Ensure the button triggers the handleLogout function
      >
        Logout
      </button>
      </div>
  );
}

export default Logout
