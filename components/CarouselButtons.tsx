"use client";

import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const CarouseButtons = ({ scrollableDivId }: { scrollableDivId: string }) => {
  return (
    <>
      <button
        onClick={() => {
          const scrollableDiv = document.getElementById(
            scrollableDivId
          ) as HTMLDivElement;
          scrollableDiv.scrollTo({
            left: -300, // Adjust the scroll amount as needed
            behavior: "smooth",
          });
        }}
        className="z-10 absolute top-1/2 -translate-y-1/2 left-2 btn-circle opacity-80 text-base-300 bg-slate-500 flex items-center justify-center cursor-pointer hover:opacity-100"
      >
        <MdOutlineNavigateBefore size={40} />
      </button>
      <button
        onClick={() => {
          const scrollableDiv = document.getElementById(
            scrollableDivId
          ) as HTMLDivElement;

          scrollableDiv.scrollTo({
            left: scrollableDiv.scrollLeft + 300, // Adjust the scroll amount as needed
            behavior: "smooth",
          });
        }}
        className="z-10 absolute top-1/2 -translate-y-1/2 right-2 btn-circle opacity-80 text-base-300 bg-slate-500 flex items-center justify-center cursor-pointer hover:opacity-100"
      >
        <MdOutlineNavigateNext size={40} />
      </button>
    </>
  );
};

export default CarouseButtons;
