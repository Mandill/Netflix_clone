import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user,logOut} = UserAuth()
  const navigate = useNavigate();

  const handleLogout = async (e)=>
  {
      try {
        await logOut();
        navigate("/")
        
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div className='flex flex-row justify-between p-3 text-white w-full absolute z-10'>
      <Link to="/">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {user?.email ? 
        (<div>
        <Link to="/account">
          <button className='m-4 px-4'>Account</button>
        </Link>
         <button onClick={handleLogout} className=' cursor-pointer px-6 py-2 rounded bg-red-600'>Log out</button>        
      </div>) :(
      <div>
      <Link to="/login">
        <button className='m-4 px-4'>Sign in</button>
      </Link>
      <Link to="/signup">
       <button className=' cursor-pointer px-6 py-2 rounded bg-red-600'>Sign up</button>
      </Link>          
    </div> )}
        
       
    </div>
  )
}

export default Navbar