import React from 'react'
import film from '../assets/film.png'

export const Navbar = () => {
  return (
    <div class="flex border space-x-5 items-center">
        <img class ="size-15" src={film} alt="image not found!" />
        <a href='/'>Movies</a>
        <a href='/watchlist'>Watchlist</a>
    </div>
  )
}
