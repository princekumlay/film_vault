
function MoviesCard({posterPath, movieName, handleAddToWatchList, movieObj, handleRemoveFromWatchList, watchList}) {

  //function to check whether the particular movie exist in the watchList or not
  function doesContains(movieObj){
    for(let i = 0; i < watchList.length; i++){
      if(watchList[i].id == movieObj.id){
        return true
      }
    }

    return false;
  }

  return (
    <div className='
    bg-center 
    bg-cover 
    h-[150px] w-[80px]
    sm:h-[170px] sm:w-[110px]
    md:h-[180px] md:w-[120px]
    lg:h-[200px] lg:w-[130px]
    flex items-end flex-col item-center justify-between
    m-2 rounded-lg
    hover:scale-110
    duration-300
    hover:cursor-pointer
    transition-all
    '
    style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`}}>

    {/* to check whether the movies exist of not in watchList to show the required button */}
    {doesContains(movieObj) ? (
        // button to remove movie from watchList
        <div 
        onClick={() => handleRemoveFromWatchList(movieObj)}
        className='
        flex justify-center item-center 
        bg-gray-900/40  
        p-1 h-8 w-8 
        rounded-[50%]
        '>&#10060;
        </div>
      ) : (
        // button to add movie to watchList
        <div 
        onClick={() => handleAddToWatchList(movieObj)} 
        className='
        flex justify-center item-center 
        bg-gray-900/40  
        p-1 h-8 w-8 
        rounded-[50%]
        '>&#128525;
        </div>
      )
    }

    
    
    <div className='
    overflow-hidden 
    text-white 
    leading-4 
    pb-2 pt-1 
    rounded-lg 
    text-center 
    text-sm 
    bg-gray-900/60  
    border border-white/20 
    w-full
    '>{movieName}
    </div>
    
        
    </div>
  )
}

export default MoviesCard