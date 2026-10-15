import React from 'react'

function MoviesCard({posterPath, movieName}) {
  return (
    <div className='
    bg-center 
    bg-cover 
    h-[150px] w-[80px]
    sm:h-[170px] sm:w-[110px]
    md:h-[180px] md:w-[120px]
    lg:h-[200px] lg:w-[130px]
    flex items-end
    m-2 rounded-lg
    hover:scale-110
    duration-300
    hover:cursor-pointer
    transition-all
    '
    style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`}}>
    
    <div className='text-white leading-4 pb-2 pt-1 rounded-lg text-center text-sm bg-cream-100 backdrop-blur-md border border-white/20 w-full'>{movieName}</div>
    
        
    </div>
  )
}

export default MoviesCard