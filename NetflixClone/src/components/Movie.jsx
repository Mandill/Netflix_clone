import React from 'react'
import {FaHeart ,FaRegHeart } from "react-icons/fa"
import { useState } from 'react'

const Movie = ({movie}) => {
    const [like,setLike] = useState(false )

  return (
    <div className='w-[160px] relative sm:w-[200px] md:w-[240px] cursor-pointer inline-block p-2'>
    <img className='block w-full h-auto ' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
    <div className='flex items-center text-center  justify-center absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
    <p>{movie?.title}</p>
    <p>
        {like ? <FaHeart className='absolute top-4 left-4 text-center'/> : <FaRegHeart className='absolute top-4 left-4'/>}
    </p>
    </div>
    </div>
  )
}

export default Movie