import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";

export const Navbare = () => {
  return (
    <div className="w-full h-20 flex items-center">
      {/* Outer container */}
      <div className="ml-50 w-330 h-25 flex justify-between items-center px-10 bg-white rounded-2xl opacity-70 mt-40">
        
        {/* Left: Logo Image */}
        <div
          className="w-50 h-25 bg-cover bg-center text-3xl"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>

        {/* Right: Links */}
        <div className="flex space-x-8">
          <Link className="text-2xl text-black mt-4 cursor-pointer
          transition-all duration-500 ease-in-out
          hover:text-blue-600 hover:-translate-y-2 " to={"/"}>HOME</Link>
          <Link className="text-2xl text-black mt-4 cursor-pointer
          transition-all duration-500 ease-in-out
          hover:text-blue-600 hover:-translate-y-2 " to={"/about"}>ABOUT</Link>
          <Link className="text-2xl text-black mt-4 cursor-pointer
          transition-all duration-500 ease-in-out
          hover:text-blue-600 hover:-translate-y-2 ">COURSES</Link>
          <Link className="text-2xl text-black mt-4 cursor-pointer
          transition-all duration-500 ease-in-out
          hover:text-blue-600 hover:-translate-y-2 ">INTERNSHIP</Link>
          <Link className="text-2xl text-black mt-4 cursor-pointer
          transition-all duration-500 ease-in-out
          hover:text-blue-600 hover:-translate-y-2 ">CARRERS</Link>
          <Link className="text-2xl text-black mt-4 cursor-pointer
          transition-all duration-500 ease-in-out
          hover:text-blue-600 hover:-translate-y-2 ">TECHBLOGS</Link>
         <div className="bg-blue-500 text-white w-60 h-16 flex items-center justify-center rounded-full opacity-100">
  <Link className="text-xl">
    INTERN REGISTRATION
  </Link>
</div>

        </div>
        
      </div>
    </div>
  );
};
