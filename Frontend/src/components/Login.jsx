import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/Auth';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [authUser, setAuthUser] = useAuth();
    const onSubmit = async(data)=> {
        const userInfo={
            
            email:data.email,
            password: data.password
        }
        try {
            const response = await axios.post('http://localhost:4001/user/login', userInfo);
            if (response.data) {
                setAuthUser(response.data.user);
                localStorage.setItem('Users', JSON.stringify(response.data.user));
                toast.success('Successfully logged in!');
                document.getElementById('my_modal_3').close();
                window.location.reload();
            }
        } catch (error) {
            if (error.response) {
                toast.error('Error: ' + error.response.data.message);
            } else {
                toast.error('Error: ' + error.message);
            }
        }
        
    };

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <button
                                type="button"
                                onClick={() => document.getElementById('my_modal_3').close()}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                ✕
                            </button>
                            <h3 className="font-bold text-lg">Login</h3>
                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email id"
                                    className="w-80 px-3 py-1 border-rounded outline-none"
                                    {...register('email', { required: true })}
                                />
                                <br />
                                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            <div className="mt-4 space-y-2 input-bordered">
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-1 border-rounded outline-none"
                                    {...register('password', { required: true })}
                                />
                                <br />
                                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            <div className="flex justify-around mt-4 input-bordered">
                                <button type="submit" className="bg-red-500 text-white rounded-md px-3 py-1">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    );
}

export default Login;
