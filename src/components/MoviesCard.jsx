import React from 'react'

function MoviesCard() {
  return (
    <div className='
    bg-center 
    bg-cover 
    h-[150px] w-[80px]
    sm:h-[250px] sm:w-[150px]
    md:h-[300px] md:w-[180px]
    lg:h-[350px] lg:w-[200px]
    flex items-end
    m-2 rounded-lg
    hover:scale-110
    duration-300
    hover:cursor-pointer
    transition-all
    '
    style={{backgroundImage: `url(https://www.tallengestore.com/cdn/shop/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_4d1b0644-dd78-42f8-996a-5d0c5bdc21b5_large.jpg?v=1573629455)`}}>
    
    <div className='text-white rounded-lg text-center font-bold p-2 bg-gray-900/50 w-full'>Joker</div>
        
    </div>
  )
}

export default MoviesCard