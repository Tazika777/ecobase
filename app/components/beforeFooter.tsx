import React from "react";

export const BeforeFooter = () => {
  return (
    <div className="w-full bg-slate-100	 h-[162px] flex  items-center px-6 py-4 sm:px-10 sm:py-6 justify-center">
      <div className="w-full max-w-7xl flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-slate-950 text-xl font-semibold">
            Subscribe Our Newsletter
          </p>
          <span className="text-slate-400 text-lg	 w-[440px]	">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </span>
        </div>
        <div className="relative">
          <input
            type="text"
            className="border border-gray-300 rounded-[46px] px-4 py-2 focus:outline-none focus:border-green-500 w-[472px] h-[52px]"
            placeholder="Enter your email"
          />
          <button className="absolute inset-y-0 right-0 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-[43px] focus:outline-none focus:shadow-outline h-[52px] w-[162px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
