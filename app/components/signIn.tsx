import Link from "next/link";
import React from "react";

export const SignIn = () => {
  return (
    <div className="w-full flex justify-center bg-slate-50 h-[500px]">
      <div className="w-[520px] h-[371px] flex flex-col align-center items-center bg-white mt-[60px] rounded-[8px]">
        <div className="mt-[24px]">
          <h1 className="text-4xl font-bold not-italic">Sign In</h1>
        </div>
        <div className="flex justify-center align-middle flex-col gap-[12px] mt-[24px]">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[472px] h-[49px]"
            placeholder="Username"
            required
          />
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[472px] h-[49px]"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex justify-between mt-[24px] w-[429px]">
          <div>
            <p className="text-slate-500	 cursor-pointer	">Remember Password</p>
          </div>
          <div>
            <p className="text-slate-500	cursor-pointer">Forgot Password</p>
          </div>
        </div>
        <div className="flex flex-col">
          {/* Login button */}
          <input
            type="button"
            value="Log in"
            className="bg-green-500	 w-[472px] rounded-[43px] h-[45px] mt-[20px] text-white cursor-pointer"
          />
          <div className="flex justify-center gap-2 mt-[12px]">
            <p className="text-slate-500 cursor-pointer">
              Don't have an account?
            </p>
            <Link  href="/Profile" className="text-black font-semibold cursor-pointer">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
