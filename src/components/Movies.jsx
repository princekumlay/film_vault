import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'

function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b14605f573ef59d483e31544fc14119a&language=en-US&page=8`).then(function(res){
      setMovies(res.data.results)
      console.log(res.data.results)
    })
  }, [])

  return (
    <div className='p-2 bg-[#1a1c23]'>
        <div className='text-2xl text-white text-center font-bold mb-5'>
            Trending Movies
        </div>
        <div className='flex flex-wrap justify-around '>
            {movies.map((movieObj) => {
              return <MoviesCard key={movieObj.id} posterPath={movieObj.poster_path} movieName={movieObj.title}/>
            })}
        </div>
    </div>
  )
}

export default Movies
