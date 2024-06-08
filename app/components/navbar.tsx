import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full  h-[60px] flex justify-center items-center px-6 py-4 sm:px-10 sm:py-6 ">
      <div className="w-full max-w-7xl	 flex justify-between gap-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-1">
            <p className="text-green-500	text-xs">Home</p>
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
            <p className=" text-zinc-400 text-xs ">Shop</p>
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
            <p className="text-zinc-400	 text-xs">Pages</p>
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
            <p className="text-zinc-400	 text-xs">Blog</p>
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
            <p className="text-zinc-400	 text-xs">About Us</p>
          </div>
          <div className="flex items-center">
            <p className="text-zinc-400	 text-xs">Contact Us</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.436 2.375C15.9193 2.77396 17.2718 3.55567 18.358 4.64184C19.4442 5.72801 20.2259 7.08051 20.6249 8.56388"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5306 5.75684C14.4205 5.99622 15.2318 6.46518 15.8833 7.11675C16.5349 7.76832 17.0039 8.57964 17.2433 9.46946"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.115 11.6517C8.02238 13.5074 9.5263 15.0048 11.3859 15.9042C11.522 15.9687 11.6727 15.9965 11.8229 15.985C11.9731 15.9735 12.1178 15.923 12.2425 15.8385L14.9812 14.0133C15.1022 13.9325 15.2414 13.8832 15.3862 13.8697C15.5311 13.8563 15.677 13.8792 15.8107 13.9363L20.9339 16.1325C21.1079 16.2065 21.2532 16.3349 21.3479 16.4986C21.4426 16.6622 21.4815 16.8522 21.4589 17.0399C21.2967 18.3069 20.6784 19.4713 19.7196 20.3153C18.7608 21.1592 17.5273 21.6248 16.25 21.6249C12.3049 21.6249 8.52139 20.0577 5.73179 17.2681C2.94218 14.4785 1.375 10.695 1.375 6.74992C1.37512 5.47271 1.84074 4.23933 2.68471 3.28069C3.52867 2.32206 4.6931 1.70389 5.96 1.54192C6.14771 1.51928 6.33769 1.55824 6.50134 1.65293C6.66499 1.74761 6.79345 1.8929 6.86738 2.06692L9.06537 7.19442C9.1219 7.32691 9.14485 7.4713 9.13218 7.61478C9.11951 7.75826 9.07162 7.89639 8.99275 8.01692L7.17275 10.7977C7.09015 10.9229 7.04141 11.0674 7.03129 11.2171C7.02117 11.3667 7.05001 11.5165 7.115 11.6517V11.6517Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-white text-xs">(219) 555-0114</p>
        </div>
      </div>
    </div>
  );
};
 export default Navbar;