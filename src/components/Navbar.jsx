import React from 'react'
import film from '../assets/film.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div class="bg-blue-900/40 flex border space-x-5 items-center">
        <img class ="size-15" src={film} alt="image not found!" />
        <Link to='/' className='font-bold text-white text-blue-500 text-lg'>Movies</Link>
        <Link to='/watchlist' className='font-bold text-white text-blue-500 text-lg'>Watchlist</Link>
    </div>
  )
}
