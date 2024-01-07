import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

import Movie from './Movie'

const Row = ({rowid,title,URL}) => {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(URL).then((res)=>
        {
            setMovies(res.data.results)
            console.log(movies);
        })
        
    },[URL])

    const slideRight = () =>
    {
        var slider = document.getElementById("slider" + rowid)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const slideLeft = () =>
    {
        var slider = document.getElementById("slider" + rowid)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full cursor-pointer absolute opacity-50 z-10 left-2 hidden hover:opacity-100 group-hover:block' size={40}/>
            <div id={'slider'+ rowid } className='overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((movie,id)=>
                    (
                    <Movie key={id} movie={movie}/>
                    ))}
            </div>
        <MdChevronRight onClick={slideRight} className='bg-white rounded-full cursor-pointer absolute right-2 opacity-50 hidden group-hover:block hover:opacity-100' size={40}/>
    </div>
    </>
  )
}

export default Row 