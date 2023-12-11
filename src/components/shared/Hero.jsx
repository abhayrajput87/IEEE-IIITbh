import React from "react";
import heroPic from "../../assets/bgImg.jpeg";
import aspcc from "../../assets/Navbar/aspcc.jpg";
import { Link } from "react-router-dom";

const Hero = ({ children }) => {
  return (
    <div className="relative">
      <img src={heroPic} className=" h-[450px] w-full object-cover" alt="" />
      <div className="absolute rounded-full h-[170px] md:h-[200px] my-auto mt-44 w-full md:w-[70%] md:mx-auto inset-0 bg-black bg-opacity-50">
        <div className="mt-4 ml-12 ">
          <div className="flex text-center items-center">
            <img
              src={aspcc}
              className="h-16 w-16 md:h-20 md:w-20 rounded-full"
              alt=""
            />
            <h1 className="ml-4 text-3xl md:text-5xl font-bold">
              ASPCC IIIT-Bh
            </h1>
          </div>
          <div className="mt-4 mx-20 md:mx-24 text-xl font-medium">
            <Link
              to="/"
              className="border-l-2 px-2 underline underline-offset-1 border-green-500 "
            >
              home
            </Link>
            <Link
              to={`/${children}`}
              className="border-l-2 px-2 underline underline-offset-1 border-green-500 "
            >
              {children}
            </Link>
          </div>
          {/* <p className="text-center"> | Home | Committee </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
