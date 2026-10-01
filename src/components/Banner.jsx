import React from "react";

function Banner() {
  return (
    <div
      className="w-full relative flex items-end h-[20vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnsRdUOCCUUTwXdW9vA19OxzRMWHddbAIZmdSb8wDEZxySehyV6Jev1fP&s=10https://www.shutterstock.com/image-vector/movies-3d-editable-text-effect-260nw-2337464747.jpg)`,
      }}
    >
        <div className="w-full text-white text-center text-xl bg-gray-900/50 p-4 font-bold">The Avengers</div>
    </div>
  );
}

export default Banner;
 