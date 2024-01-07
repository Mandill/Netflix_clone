import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {UserAuth} from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {user,signUp} = UserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try {
            await signUp(email,password)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
        finally
        {
            setPassword("");
            setEmail("");
        }    
    }

  return (
    <>
        <div className='w-full h-screen'>
            <img className="hidden sm:block object-cover h-full w-full" src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/43782c6a-f847-4d6f-9f10-371d7dd28c98/NP-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg'/>
            <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
            <div className="fixed top-0 left-0 flex w-full items-center justify-center h-full ">
                    <div className='w-[450px] h-[600px] bg-black/75 text-white'>
                        <div className='w-[350px]  my-16 mx-auto'>
                            <h1 className='text-center text-3xl font-bold my-3'>SignUp</h1>
                            <form  onSubmit={handleSubmit} className='w-full flex flex-col gap-3 py-4'>
                                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className ="p-2 bg-gray-600  rounded" type="email" placeholder='Email' />
                                <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} className="p-2 bg-gray-600 my-2 rounded" type="password" placeholder='Password' />
                                <button className='bg-red-600 py-3 rounded-lg'>SignUp</button>
                                <div className='flex justify-between my-2'>
                                    <p><input className="mx-2" type="checkbox"/>Remember me</p>
                                    <p className='cursor-pointer hover:text-blue-500'>Need Help?</p>
                                </div>
                                <p className='text-gray-600'> Already subscribed to Netflix?
                                <Link to="/login">
                                    <span className='text-white hover:text-blue-400 mx-2'>Sign in</span>
                                </Link>
                                </p>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Signup