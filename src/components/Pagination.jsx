import React from "react";

function Pagination({pageNo, setPageNo}) {


    const handlePrevious = () => {
        if(pageNo > 1){
            setPageNo(pageNo - 1);
        }
    }

    const handleNext = () => {
        setPageNo(pageNo + 1);
    }

  return <div className="w-full bg-transparent text-white text-xl flex justify-center align-center gap-8 p-2">

    {/* forward arrow */}
    <div className="
    hover:scale-150
    duration-300
    hover:cursor-pointer
    transition-all
    "><button onClick={handlePrevious}><i class="fa-solid fa-angle-left"></i></button></div>

    {/* page number */}
    <div>{pageNo}</div>

    {/* backward arrow */}
    <div className="
    hover:scale-150
    duration-300
    hover:cursor-pointer
    transition-all
    "><button onClick={handleNext}><i class="fa-solid fa-angle-right"></i></button></div>

  </div>;
}

export default Pagination;
