import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import toast from 'react-hot-toast';
import { useAuth } from '../context/Auth';

const Order = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [authUser] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('Users');
    const savedCart = localStorage.getItem('cart');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = async () => {
    try {
      if (!authUser) {
        toast.error('Please login to proceed.');
        return;
      }

      const response = await axios.post('http://localhost:4001/order', {
        userId: authUser._id,  
        items: cart.map(item => ({ name: item.name })),  
        email: user.email, 
      });
      
      console.log(response.data);  
      toast.success('Order placed successfully!');
      
      
      setCart([]);
      localStorage.removeItem('cart');
      navigate('/');  // Redirect to home or a success page
    } catch (error) {
      console.error('Error placing order:', error);  // Log error for debugging
      toast.error('Failed to place order. Please try again.');
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold mb-8">Your Order</h1>
        <div className="mb-4">
          <h2 className="text-xl">Customer Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl">Cart Items</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cart.map((item, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                  <figure>
                    <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title text-lg font-bold">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="card-actions justify-end mt-4">
                      
                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <button
            className="btn btn-primary"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </>
  );
};

export default Order;
