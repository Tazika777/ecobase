import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="w-full flex justify-center bg-slate-50 h-[500px]">
      <div className="w-[520px] h-[371px] flex flex-col align-center items-center bg-white mt-[60px] rounded-[8px]">
        <div className="mt-[24px]">
          <h1 className="text-4xl font-bold not-italic">Create Account</h1>
        </div>
        <div className="flex justify-center align-middle flex-col gap-[12px] mt-[24px]">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[472px] h-[49px]"
            placeholder="Email"
            required
          />
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[472px] h-[49px]"
            placeholder="Password"
            required
          />
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[472px] h-[49px]"
            placeholder="Repeat Password"
            required
          />
          <div className="flex justify-start items-center gap-2 ml-2">
            <input type="checkbox" defaultChecked className="checkbox" />
            <label className="label ">
              <span className="label-text text-slate-500">Accept all terms & Conditions</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          {/* Create account button */}
          <input
            type="button"
            value="Create Account"
            className="bg-green-500	 w-[472px] rounded-[43px] h-[45px] mt-[20px] text-white cursor-pointer"
          />
          <div className="flex justify-center gap-2 mt-[12px]">
            <p className="text-slate-500 cursor-pointer">
              Already have account
            </p>
            <Link  href="/orderHistory" className="text-black font-semibold cursor-pointer">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
