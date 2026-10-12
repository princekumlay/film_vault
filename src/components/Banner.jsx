import React from "react";

function Banner() {
  return (
    <div
      className="w-full relative flex items-end h-[20vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original//bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg)`,
      }}
    >
        <div className="w-full text-white text-center text-xl bg-gray-900/50 p-4 font-bold">Spiderman: Brand new days</div>
    </div>
  );
}

export default Banner;
 