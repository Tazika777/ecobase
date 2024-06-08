import Image from "next/image";
import React from "react";

import background from "./images/vegetablesBackground.jpg";

export const SelectedNavigation = () => {
  return (
    <div className="relative w-full h-[120px]">
      <Image
        src={background}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        </div>
      </div>
    </div>
  );
};
export default SelectedNavigation;
