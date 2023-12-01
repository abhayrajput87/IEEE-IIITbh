import iiit from "../assets/Navbar/iiit.jpg";
import aspcc from "../assets/Navbar/aspcc.jpg";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className=" flex justify-between absolute top-0 left-0 z-40 bg-white w-full text-black mx-auto md:px-4 px-2 items-center min-w-full py-2 ">
        <img className="w-20 h-fit object-cover" src={aspcc} alt="" />
        <ul className="hidden md:flex">
          <li className="py-4 px-6 hover:border-b-[2px] border-black ">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="py-4 px-6 hover:border-b-[2px] border-black ">
            {" "}
            <Link to="/committees">Committees</Link>{" "}
          </li>

          <li className="py-4 px-6 hover:border-b-[2px] border-black ">
            {" "}
            <Link to="/papers">Papers</Link>{" "}
          </li>
          <li className="py-4 px-6 hover:border-b-[2px] border-black ">
            {" "}
            <Link to="/program">Program</Link>{" "}
          </li>
          <li className="py-4 px-6 hover:border-b-[2px] border-black ">
            {" "}
            <Link to="/conferences">Attending Conference</Link>{" "}
          </li>
          <li className="py-4 px-6 hover:border-b-[2px] border-black ">
            {" "}
            <Link to="/contact">Contact</Link>{" "}
          </li>
        </ul>
        <img className="w-20 h-fit object-cover" src={iiit} alt="" />

        <div className="p-4 block md:hidden z-50 " onClick={handleNav}>
          {!nav ? (
            <AiOutlineMenu className="text-black" size={20} />
          ) : (
            <AiOutlineClose className="text-black" size={20} />
          )}
        </div>
        <div
          className={
            nav
              ? "block fixed left-0 top-0 w-[100%] h-screen bg-[#ffffff] border-r border-r-gray-900 ease-in-out duration-500 z-40 sm:hidden"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="p-4 text-3xl font-bold w-full text-[#000000] m-4 ">
            IIIT-BBSR
          </h1>

          <ul className="p-4">
            <li className="p-4 border-b border-b-gray-600">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b border-b-gray-600">Committees</li>
            <li className="p-4 border-b border-b-gray-600">Papers</li>
            <li className="p-4 border-b border-b-gray-600">Program</li>
            <li className="p-4 border-b border-b-gray-600">
              Attending Conference
            </li>

            <li className="p-4 ">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
