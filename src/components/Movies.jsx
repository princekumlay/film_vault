import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({watchList, setWatchList}) {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  //function to add particular movie to the watchList
  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];

    setWatchList(newWatchList)
    // console.log(newWatchList)
    
  }

  // function to remove particular movie from the watchList
  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return (movie.id != movieObj.id)
    })

    setWatchList(filteredWatchList);
    // console.log(filteredWatchList);
  }
  // console.log(watchList);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b14605f573ef59d483e31544fc14119a&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      // console.log(res.data.results)
    })
  }, [pageNo])

  return (
    <div className='w-full p-2 bg-[#0f1015]'>

      {/* heading */}
        <div className='text-2xl text-white text-center font-bold mb-5'>
            Trending Movies
        </div>

      {/* movie cards */}
        <div className='flex flex-wrap justify-around '>
            {movies.map((movieObj) => {
              return <MoviesCard 
              key={movieObj.id} 
              handleAddToWatchList={handleAddToWatchList} movieObj={movieObj} 
              handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}
              posterPath={movieObj.poster_path} 
              movieName={movieObj.title}
              />
            })}
        </div>

      {/* //pagination       */}
        <Pagination pageNo = {pageNo} setPageNo = {setPageNo}/>

    </div>
  )
}

export default Movies
