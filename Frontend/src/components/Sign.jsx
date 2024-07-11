import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Sign() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data)=> {
        const userInfo={
            name:data.name,
            email:data.email,
            password: data.password
        }
          await  axios.post("http://localhost:4001/user/sign",userInfo)
            .then((res)=>{
                console.log(res.data)
                if(res.data){
                    toast.success("Successfully signed in!");
                }
                localStorage.setItem("Users",JSON.stringify(res.data.user));
                 }
              ).catch((err)=>{
                if(err.response){
                    toast.error("Error : " + err.response.data.message);
                }
              })
        
    };



  return (
    <>
      <div className="flex h-screen items-center justify-center">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div  className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to ="/"  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Signin</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className="w-80 px-3 py-1 border rounded outline-none"
                {...register("name", { required: true })}/>
                <br/>
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input 
                type="email" 
                placeholder="Enter your email id" 
                className="w-80 px-3 py-1 border rounded outline-none" 
                {...register("email", { required: true })}/>
             <br/>
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
           
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-80 px-3 py-1 border rounded outline-none"
                {...register("password", { required: true })}/>
             <br/>
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>} 
              
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-red-500 text-white rounded-md px-3 py-1">Signin</button>
             
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;
