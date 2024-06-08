import Image from "next/image";
import React from "react";

import Pf from "./images/ProfilePic.jpg";
import Link from "next/link";
const UserInfo = () => {
  return (
    <div className="w-full flex justify-center items-center px-6 py-4 sm:px-10 sm:py-6">
      <div className="w-full max-w-7xl flex gap-[24px]">
        {/* Card */}
        <div className="flex h-[410px] w-[312px] rounded-[8px] border-[1px] border-slate-300 max-w-7xl">
          <div className="flex flex-col gap-[15px]   w-full">
            <div className="text-xl	font-semibold items-center	pl-[17px] pt-[15px]">
              <p className="text-black">Navigation</p>
            </div>
            <div className="flex gap-[9px] items-center h-[42px] hover:bg-green-50 cursor-pointer p-[17px]">
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5056_4720)">
                  <path
                    d="M21 18H13V12H21V18ZM11 18H3V8H11V18ZM21 10H13V0H21V10ZM11 6H3V0H11V6Z"
                    fill="#1A1A1A"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5056_4720"
                    x="-1"
                    y="0"
                    width="26"
                    height="26"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5056_4720"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5056_4720"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <Link  href="/orderHistory" className="text-black text-base">Dashboard</Link>
            </div>
            <div className="flex gap-[9px] items-center h-[42px] hover:bg-green-50 cursor-pointer p-[17px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16V9.00004H7L3.783 12.22C4.33247 12.7819 4.98837 13.2287 5.71241 13.5343C6.43644 13.8399 7.21411 13.9983 8 14C9.23925 13.9982 10.4475 13.6127 11.4589 12.8965C12.4702 12.1802 13.2349 11.1684 13.648 10H13.666C13.78 9.67504 13.867 9.34004 13.925 9.00004H15.937C15.6934 10.9333 14.7527 12.7111 13.2913 14C11.83 15.2888 9.9485 16 8 16H7.99C6.93982 16.0032 5.89944 15.798 4.9291 15.3963C3.95876 14.9946 3.07772 14.4045 2.337 13.66L0 16ZM2.074 7.00004H0.0619998C0.305476 5.06751 1.24564 3.29019 2.70616 2.00145C4.16667 0.712703 6.04719 0.00107558 7.995 3.98088e-05H8C9.05036 -0.00328613 10.0909 0.201826 11.0615 0.603496C12.032 1.00517 12.9132 1.59541 13.654 2.34004L16 3.98088e-05V7.00004H9L12.222 3.78004C11.672 3.21752 11.0153 2.77035 10.2903 2.46471C9.56537 2.15907 8.78674 2.0011 8 2.00004C6.76074 2.00187 5.55246 2.38738 4.54114 3.10361C3.52982 3.81985 2.76508 4.83166 2.352 6.00004H2.334C2.219 6.32504 2.132 6.66004 2.075 7.00004H2.074Z"
                  fill="#CCCCCC"
                />
              </svg>
              <p className="text-base">Order History</p>
            </div>
            <div className="flex gap-[9px] items-center h-[42px] hover:bg-green-50 cursor-pointer p-[17px]">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9997 19.0543C-7.99987 8.00015 6.00011 -3.99984 11.9997 3.58821C18.0001 -3.99985 32.0001 8.00015 11.9997 19.0543Z"
                  stroke="#CCCCCC"
                  stroke-width="1.5"
                />
              </svg>
              <p>Wishlist</p>
            </div>
            <div className="flex gap-[9px] items-center h-[42px] hover:bg-lime-50 cursor-pointer p-[17px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10H5L3 21H21L19 10H16M8 10V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V10M8 10H16M8 10V13M16 10V13"
                  stroke="#CCCCCC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-base">Shopping Cart</p>
            </div>
            <div className="flex gap-[9px] items-center h-[42px] hover:bg-green-50 cursor-pointer p-[17px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8199 22H10.1799C9.95182 22 9.73059 21.9221 9.55289 21.7792C9.37519 21.6362 9.25169 21.4368 9.20288 21.214L8.79588 19.33C8.25294 19.0921 7.73812 18.7946 7.26088 18.443L5.42388 19.028C5.20645 19.0973 4.97183 19.0902 4.759 19.0078C4.54617 18.9254 4.36794 18.7727 4.25388 18.575L2.42988 15.424C2.31703 15.2261 2.27467 14.9958 2.30973 14.7708C2.34479 14.5457 2.45519 14.3392 2.62288 14.185L4.04788 12.885C3.98308 12.2961 3.98308 11.7019 4.04788 11.113L2.62288 9.816C2.45496 9.66177 2.3444 9.45507 2.30933 9.22978C2.27427 9.00449 2.31677 8.77397 2.42988 8.576L4.24988 5.423C4.36394 5.22532 4.54218 5.07259 4.755 4.99019C4.96783 4.90778 5.20245 4.90066 5.41988 4.97L7.25688 5.555C7.50088 5.375 7.75488 5.207 8.01788 5.055C8.26988 4.913 8.52988 4.784 8.79588 4.669L9.20388 2.787C9.25246 2.5642 9.37572 2.36469 9.55323 2.22155C9.73074 2.07841 9.95185 2.00024 10.1799 2H13.8199C14.0479 2.00024 14.269 2.07841 14.4465 2.22155C14.6241 2.36469 14.7473 2.5642 14.7959 2.787L15.2079 4.67C15.7505 4.9079 16.265 5.20539 16.7419 5.557L18.5799 4.972C18.7972 4.90292 19.0316 4.91017 19.2442 4.99256C19.4568 5.07495 19.6349 5.22753 19.7489 5.425L21.5689 8.578C21.8019 8.985 21.7209 9.5 21.3759 9.817L19.9509 11.117C20.0157 11.7059 20.0157 12.3001 19.9509 12.889L21.3759 14.189C21.7209 14.507 21.8009 15.021 21.5689 15.428L19.7489 18.581C19.6349 18.7785 19.4568 18.931 19.2442 19.0134C19.0316 19.0958 18.7972 19.1031 18.5799 19.034L16.7419 18.449C16.2651 18.8004 15.7506 19.0976 15.2079 19.335L14.7959 21.214C14.7471 21.4366 14.6238 21.6359 14.4463 21.7788C14.2688 21.9218 14.0478 21.9998 13.8199 22ZM7.61988 16.229L8.43988 16.829C8.62488 16.965 8.81788 17.09 9.01688 17.204C9.20488 17.313 9.39788 17.411 9.59588 17.5L10.5289 17.909L10.9859 20H13.0159L13.4729 17.908L14.4059 17.499C14.8129 17.319 15.1999 17.096 15.5589 16.833L16.3799 16.233L18.4209 16.883L19.4359 15.125L17.8529 13.682L17.9649 12.67C18.0149 12.227 18.0149 11.78 17.9649 11.338L17.8529 10.326L19.4369 8.88L18.4209 7.121L16.3799 7.771L15.5589 7.171C15.1997 6.90669 14.8131 6.68173 14.4059 6.5L13.4729 6.091L13.0159 4H10.9859L10.5269 6.092L9.59588 6.5C9.18807 6.67861 8.80136 6.90198 8.44288 7.166L7.62188 7.766L5.58188 7.116L4.56488 8.88L6.14788 10.321L6.03588 11.334C5.98588 11.777 5.98588 12.224 6.03588 12.666L6.14788 13.678L4.56488 15.121L5.57988 16.879L7.61988 16.229ZM11.9959 16C10.935 16 9.9176 15.5786 9.16746 14.8284C8.41731 14.0783 7.99588 13.0609 7.99588 12C7.99588 10.9391 8.41731 9.92172 9.16746 9.17157C9.9176 8.42143 10.935 8 11.9959 8C13.0568 8 14.0742 8.42143 14.8243 9.17157C15.5745 9.92172 15.9959 10.9391 15.9959 12C15.9959 13.0609 15.5745 14.0783 14.8243 14.8284C14.0742 15.5786 13.0568 16 11.9959 16ZM11.9959 10C11.6042 10.0004 11.2213 10.1158 10.8947 10.3318C10.568 10.5479 10.3119 10.855 10.1583 11.2153C10.0046 11.5755 9.9601 11.9729 10.0303 12.3583C10.1004 12.7436 10.2822 13.0998 10.5529 13.3828C10.8237 13.6657 11.1716 13.863 11.5534 13.95C11.9353 14.037 12.3343 14.01 12.7009 13.8724C13.0676 13.7347 13.3858 13.4924 13.616 13.1756C13.8462 12.8587 13.9783 12.4812 13.9959 12.09V12.49V12C13.9959 11.4696 13.7852 10.9609 13.4101 10.5858C13.035 10.2107 12.5263 10 11.9959 10Z"
                  fill="#CCCCCC"
                />
              </svg>
              <p>Settings</p>
            </div>
            <div className="flex gap-[9px] items-center h-[42px] hover:bg-green-50 cursor-pointer p-[17px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21H10C9.46957 21 8.96086 20.7893 8.58579 20.4142C8.21071 20.0391 8 19.5304 8 19V15H10V19H19V5H10V9H8V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                  fill="#CCCCCC"
                />
              </svg>
              <p className="text-base">Log Out</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px]">
            <div className=" w-[536px] h-[278px] rounded-[8px] border-[1px] border-slate-300">
              <div className="flex flex-col justify-center text-center pt-[42px] pl-[208px] pr-[208px] gap-3">
                {/* ak pfp pic chavardeba */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 394 80"
                >
                  <path
                    fill="#000"
                    d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
                  />
                  <path
                    fill="#000"
                    d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
                  />
                </svg>
                <p className="text-black font-semibold">Dianne Russell</p>
                <span className="text-slate-400	text-xs	">Customer</span>
                <span className="text-sm	text-green-600	">Edit Profile</span>
              </div>
            </div>
            <div className="w-[428px] h-[278px] rounded-[8px] border-[1px] border-slate-300">
              <div className="flex flex-col gap-[18px] pl-[32px] pt-[22px] pb-[15px]">
                <p className="text-sm text-slate-400		">Billind Address</p>
                <p className="text-lg font-semibold	">Dainne Russel</p>
                <p className="text-sm text-slate-400	">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <span className="text-base">dainne.ressell@gmail.com</span>
                <span className="text-base">671 555-0110</span>
                <span className="text-base text-green-500">Edit Address</span>
              </div>
            </div>
          </div>
          <div className="w-[984px] h-[404px] rounded-[8px] border-[1px] border-slate-300 flex flex-col">
              <div className="flex justify-between p-[15px] w-[984px] h-[36]">
                <p className="text-xl	font-medium	">Recet Order History</p>
                <p className="text-green-500 text-base">View All</p>
              </div>
              <div className="p-[15px] flex gap-[190px] bg-slate-100 w-[984px] h-[36]">
                <p className="text-slate-400 text-sm	">Order ID</p>
                <p className="text-slate-400 text-sm	">Date</p>
                <p className="text-slate-400 text-sm	">Total</p>
                <p className="text-slate-400 text-sm	">Status</p>
              </div>
              <div className="p-[15px]  inline-flex justify-between w-[984px] h-[36]">
                <p className="">#738</p>
                <p className="">8 Sep, 2020</p>
                <p><span className="font-medium">$25.00</span>(1 Product)</p>
                <p className="font-normal	">Processing</p>
                <p className="text-green-500">View Details</p>
              </div>
              <div className="p-[15px]  inline-flex justify-between w-[984px] h-[36]">
                <p className="">#703</p>
                <p className="">24 May, 2020</p>
                <p><span className="font-medium">$250.00</span>(4 Products)</p>
                <p className="font-normal	">on the way</p>
                <p className="text-green-500">View Details</p>
              </div>
              <div className="p-[15px]  inline-flex justify-between w-[984px] h-[36]">
                <p className="">#130</p>
                <p className="">22 Oct, 2020</p>
                <p><span className="font-medium">$35.00</span>(1 Products)</p>
                <p className="font-normal	">Completed</p>
                <p className="text-green-500">View Details</p>
              </div>
              <div className="p-[15px]  inline-flex justify-between w-[984px] h-[36]">
                <p className="">#561</p>
                <p className="">1 Feb, 2020</p>
                <p><span className="font-medium">$578.00</span>(13 Products)</p>
                <p className="font-normal	">Completed</p>
                <p className="text-green-500">View Details</p>
              </div>
              <div className="p-[15px]  inline-flex justify-between w-[984px] h-[36]">
                <p className="">#492</p>
                <p className="">21 Sep, 2020</p>
                <p><span className="font-medium">$345.00</span>(5 Products)</p>
                <p className="font-normal	">Completed</p>
                <p className="text-green-500">View Details</p>
              </div>
          </div>
        </div>

        {/* Card */}
      </div>
    </div>
  );
};

export default UserInfo;
