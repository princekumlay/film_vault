
import { useState } from "react";

function WatchList() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex justify-center  my-4 p-4">
        <div className="border border-gray-800 text-gray-400 text-center rounded-[8px] bg-[#111111] w-[100px] h-[30px] mx-2">All Genres</div>
        <div className="border border-gray-800 text-gray-400 text-center rounded-[8px] bg-[#111111] w-[100px] h-[30px] mx-2">Adventure</div>
        <div className="border border-gray-800 text-gray-400 text-center rounded-[8px] bg-[#111111] w-[100px] h-[30px] mx-2">Comedy</div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-[200px] lg:w-[600px]">

        {/* Search Icon */}
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
          🔍
        </span>

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
      
      <div className="overflow-hidden bg-[#111111] border border-gray-800 m-4 rounded-[8px]  my-5">
        <table className="w-full text-gray-400 text-center">
          <thead>
            <tr>
              <th className="border border-gray-800">Name</th>
              <th className="border border-gray-800">Ratings</th>
              <th className="border border-gray-800">Popularity</th>
              <th className="border border-gray-800">Genres</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img className="w-[6rem] h-[10rem]" src={`https://m.media-amazon.com/images/I/71eHZFw+GlL._AC_UF894,1000_QL80_.jpg`} alt="" />
                <div className="mx-[8px]">Avengers Endgame</div>
              </td>
              <td>9</td>
              <td>5</td>
              <td>Adventure</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}

export default WatchList;
