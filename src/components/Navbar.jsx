import React from 'react'
import film from '../assets/film.png'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {

  const location = useLocation();

  return (
    <div className={`
    w-full 
    z-50 
    flex items-center
    border 
    space-x-5
    ${
      location.pathname === "/" ? "fixed top-0 left-0 bg-gray-900/80" : ""
    }
    `}>
        <img className="size-15" src={film} alt="image not found!" />
        <Link to='/' className='font-bold text-white text-blue-500 text-lg'>Movies</Link>
        <Link to='/watchlist' className='font-bold text-white text-blue-500 text-lg'>Watchlist</Link>
    </div>
  )
}
