import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:4001/menu');
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  const addToCart = (food) => {
    const updatedCart = [...cart, food];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
    <Navbar/>
    <br/>
    <br/><br/><br/>
     <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold text-center mb-8">Our Menu</h1>
    <div id="menu-container" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {foods.map((food) => (
        <div key={food._id} className="card bg-base-100 w-full shadow-xl">
          <figure>
            <img src={food.img} alt={food.name} className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-bold">
              {food.name}
              <div className="badge badge-secondary ml-2">{food.CategoryName}</div>
            </h2>
            <p className="text-gray-600">{food.description}</p>
            <div className="card-actions justify-end mt-4">
              <div className="badge badge-outline">${food.price}</div>
              <div className="badge badge-outline">price drop!</div>
              <button
                    className="bg-red-500 text-white rounded-md px-3 py-1"
                    onClick={() => addToCart(food)}
                  >
                    Add to Cart
                  
                  </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
          <Link to="/order" className="btn btn-secondary">
            View Cart
          </Link>
        </div>
  </div>
    </>
   
  );
};

export default Menu;
