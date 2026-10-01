import React from 'react'
import MoviesCard from './MoviesCard'

function Movies() {
  return (
    <div className='p-2 bg-gray-900/90'>
        <div className='text-2xl text-white text-center font-bold mb-5'>
            Trending Movies
        </div>
        <div className='flex flex-wrap justify-around '>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </div>
    </div>
  )
}

export default Movies
