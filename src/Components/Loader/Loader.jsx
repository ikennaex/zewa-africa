import React from "react";
import { logo } from "../../imports";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-customGreen text-white">
      <div className="flex flex-col justify-center items-center animate-pulse rounded-full h-16 w-16 border-white">
        <img src= {logo} alt="" />
        <p className="text-center leading-[1] font-semibold pt-4">Boomanage Properties</p>
      </div>
    </div>
  );
};

export default Loader;