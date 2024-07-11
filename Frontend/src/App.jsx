import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'


import Sign from './components/Sign'
import Menu from './components/Menu'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/Auth'
import Order from './components/Order'


function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
     <Routes>
      <Route path ="/" element={<Home/>}/>
      
      <Route path ="/Sign" element={<Sign/>}/>
      <Route path="/Order" element={authUser?<Order />:<Navigate to ="/Sign"/>} />
      <Route path ="/Menu" element={authUser?<Menu/>:<Navigate to ="/Sign"/>}/>
     </Routes>
     <Toaster/>
   
    </>
  )
}

export default App
