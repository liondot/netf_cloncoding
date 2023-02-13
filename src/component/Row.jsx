import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies';
import { BiChevronLeftCircle,BiChevronRightCircle } from "react-icons/bi";
import '../style/row.scss'


const Row = ({ title,fetchURL }) =>  {

    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axios.get(fetchURL)
        .then((responsive) => {
            setMovies(responsive.data.results)
        })
    },[fetchURL])

  return (
    <div className='row'>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className="relative flex items-center">
      </div>
      <BiChevronLeftCircle className='iconLeft'/>
      <div id={'slider'} className="w-full overflow-x-scroll scroll-bar-hide relative whitespace-nowrap scroll-smooth flex">
        {movies.map((item, id)=>(
            <Movies key={id} id={id} item={item}/>
        ))}
      </div>
      <BiChevronRightCircle className='iconRight'/>

    </div>
  )
}

export default Row
