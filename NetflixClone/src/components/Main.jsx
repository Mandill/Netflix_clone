import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from "axios"

const Main = () => {
    const [movies,setMovies] = useState([])

    const random = movies[Math.floor(Math.random()*movies.length)]
    useEffect(()=>{
        axios.get(requests.requestPopular).then((res)=>
        {
            setMovies(res.data.results)
        })
    },[])

    const truncateString = (str,num)=>
    {
        if(str?.length > num)
        {
            return str.slice(0,num) +'...'
        }
        else 
        {
            return 
        }
    }
  return (
    <div className='w-full h-[550px] text-white'>
    <div className="w-full h-full">
        <div className='w-full h-[550px] absolute bg-gradient-to-r from-black'></div>
        <img className='w-full object-cover h-full' src={`https://image.tmdb.org/t/p/original/${random?.backdrop_path}`} />
        
        <div className='absolute w-full top-[20%] p- md:p-8'>
             <h1 className='m-4 my-8 text-3xl md:text-5xl font-bold'>{random?.title}</h1>
            <button className='border px-5 py-1 bg-white text-black mx-4'>Play</button>
            <button className='border px-5 py-1'>Watch later</button>
            <p className='text-gray-400 text-sm m-4'>Release date : {random?.release_date}</p>
            <p className='text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-sm m-4'>Release date : {truncateString(random?.overview,100)}</p>
        </div>
    </div>
    </div>

  )
}

export default Main