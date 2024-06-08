import React from "react";

export const MainHeader = () => {
  return (
    <div className="w-full bg-zinc-800 text-white flex justify-center items-center px-6 py-4 sm:px-10 sm:py-6 h-4">
      <div className="w-full max-w-7xl	 flex justify-between gap-4"> {/* daemata gap-4 class */}
        <div className="flex items-center">
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z"
              stroke="#B3B3B3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-slate-400 text-xs">
            Store Location: Lincoln- 344, Chicago, Usa
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <p className="text-slate-400 text-xs">ENG</p>
            <svg
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1.25L4.5 4.75L1 1.25"
                stroke="#B3B3B3"
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-slate-400 text-xs">USD</p>
            <svg
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1.25L4.5 4.75L1 1.25"
                stroke="#B3B3B3"
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
