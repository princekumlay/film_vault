import { useState } from "react";

function WatchList() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genre");

  const genres = ["All Genres", "Action", "Comedy"];

  return (
    <>
      <div className="flex justify-center  my-4 p-4">
        <div className="flex flex-wrap gap-2 p-2">
          {genres.map((genre) => (
            <div
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`            
            cursor-pointer
            border
            text-center
            rounded-[8px]
            w-[100px] h-[30px]
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            ${
              selectedGenre === genre
                ? "border-white-900 text-white bg-purple-500 shadow-md scale-105"
                : "border-gray-800 text-gray-400 bg-[#111111] hover:border-white"
            }
         `}
            >
              {genre}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-[200px] lg:w-[600px]">
          {/* Search Icon */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies..."
            className="
            w-full
            h-12
            pl-12 pr-4
            rounded-xl

            bg-[#111111]
            text-white
            placeholder-gray-500

            border border-gray-800
            outline-none

            transition-all duration-300

            focus:border-purple-500
            focus:ring-2
            focus:ring-purple-500/20
            focus:shadow-[0_0_20px_rgba(168,85,247,0.15)]

            hover:border-gray-700
          "
          />
        </div>
      </div>

      <div className="overflow-hidden  border border-gray-800 m-4 rounded-[8px]  my-5">
        <table className="w-full text-gray-400 text-center">
          <thead className="border border-gray-800">
            {" "}
            {/* table head*/}
            <tr>
              <th className="hidden sm:table-cell">Name</th>
              <th className="hidden sm:table-cell">Ratings</th>
              <th className="hidden sm:table-cell">Popularity</th>
              <th className="hidden sm:table-cell">Genres</th>
            </tr>
          </thead>

          <tbody>
            {" "}
            {/* table body*/}
            <tr className="border border-gray-800">
              <td className="flex items-center px-6 py-4">
                <img
                  className="w-[4rem] h-[7rem] lg:w-[6rem] lg:h-[10rem] rounded-md"
                  src={`https://m.media-amazon.com/images/I/71eHZFw+GlL._AC_UF894,1000_QL80_.jpg`}
                  alt=""
                />
                <div className="mx-[8px]">Avengers Endgame</div>
              </td>
              <td className="hidden sm:table-cell">9</td>
              <td className="hidden sm:table-cell">5</td>
              <td className="hidden sm:table-cell">Adventure</td>
              <td className="text-red-600 text-xl pr-3">
                <i className="fa-solid fa-trash-can fa-md"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}


export default WatchList;
