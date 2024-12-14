import iiit from "../../assets/Navbar/iiit.jpg";
import aspcc from "../../assets/Navbar/aspcc.jpg";
import ieee from "../../assets/Navbar/ieee.jpg";
import { Link, Outlet } from "react-router-dom";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  let [dropdown, setDropdown] = useState(false);
  let [drop, setDrop] = useState(false);
  let [dropConf, setDropConf] = useState(false);
  let [dropProg, setDropProg] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className=" shadow-md flex justify-between fixed top-0 left-0 z-40 bg-white w-full text-black mx-auto md:px-4 px-2 items-center min-w-full py-2 ">
        <img className="w-20 h-fit object-cover" src={aspcc} alt="" />
        <img className="w-40 md:-ml-16 h-fit object-cover" src={ieee} alt="" />
        <ul className="hidden md:flex">
          <li className="py-4 px-6 hover:border-b-[2px] border-black ">
            {" "}
            <Link to="/">Home</Link>
          </li>

          <li className="relative py-4 px-6 hover:border-b-[2px] border-black "
           onMouseEnter={() => setDrop(true)}
           onMouseLeave={() => setDrop(false)}
          >
            <button
              className=" duration-300 pb-3 hover:scale-110"
             
            >
              Committees &#709;
            </button>
            <div
              className={`w-60 md:absolute rounded-lg bg-white -right-20 p-2 z-10 transition-all duration-1000 ${
                drop ? "top-15" : "top-[-200px]"
              }`}
   
            >
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/organisingcommittee"
                    className="flex hover:scale-105 duration-300 "
                  >
                    Organising Committee
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technicalprogramcommittee"
                    className="flex hover:scale-105 duration-300"
                  >
                    Technical Program Committee
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internationaladvisorycommittee"
                    className="flex hover:scale-105 duration-300"
                  >
                    International Advisory Committee
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="relative py-4 px-6 hover:border-b-[2px] border-black "
           onMouseEnter={() => setDropdown(true)}
           onMouseLeave={() => setDropdown(false)}
          >
            <button
              className=" duration-300 pb-3 hover:scale-110"
             
            >
              Papers &#709;
            </button>
            <div
              className={`w-50 md:absolute rounded-lg bg-white -right-20 p-2 z-10 transition-all duration-1000 ${
                dropdown ? "top-15" : "top-[-200px]"
              }`}
             
            >
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/callforpapers"
                    className="flex hover:scale-105 duration-300 "
                  >
                    Call for papers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/registration"
                    className="flex hover:scale-105 duration-300"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cameraready"
                    className="flex hover:scale-105 duration-300"
                  >
                    Camera-ready submission guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </li>
           {/*            */}
           <li className="relative py-4 px-6 hover:border-b-[2px] border-black "
           onMouseEnter={() => setDropProg(true)}
           onMouseLeave={() => setDropProg(false)}
           >
            <button
              className=" duration-300 pb-3 hover:scale-110"
             
            >
              Program &#709;
            </button>
            <div
              className={`w-48 md:absolute rounded-lg bg-white -right-12 p-2 z-10 transition-all duration-1000 ${
                dropProg ? "top-15" : "top-[-200px]"
              }`}
    
            >
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/programschedule"
                    className="flex hover:scale-105 duration-300 "
                  >
                    Program Schedule
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="relative py-4 px-6 hover:border-b-[2px] border-black "
           onMouseEnter={() => setDropConf(true)}
           onMouseLeave={() => setDropConf(false)}
           >
            <button
              className=" duration-300 pb-3 hover:scale-110"
             
            >
              Attending Conference &#709;
            </button>
            <div
              className={`w-60 md:absolute rounded-lg bg-white -right-10 p-2 z-10 transition-all duration-1000 ${
                dropConf ? "top-15" : "top-[-200px]"
              }`}
    
            >
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/aboutbhubaneswar"
                    className="flex hover:scale-105 duration-300 "
                  >
                    About Bhubaneswar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accommodation"
                    className="flex hover:scale-105 duration-300"
                  >
                    Accommodation
                  </Link>
                </li>
              </ul>
            </div>
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

        {/*MOBILE NAVBAR */}
        <div
          className={
            nav
              ? "block fixed left-0 top-0 w-[100%] h-screen bg-[#ffffff] border-r border-r-gray-900 ease-in-out duration-500 z-40 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="p-4 text-3xl font-bold w-full text-[#000000] m-4 ">
            IIIT-BBSR
          </h1>

          <ul className="p-4">
            <li
              onClick={() => {
                setNav(!nav);
              }}
              className="p-4 border-b border-b-gray-600"
            >
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => {
                setNav(!nav);
              }}
              className="p-4 border-b border-b-gray-600"
            >
              <Link to="/organisingcommittee">Organising Committee</Link>
            </li>
            <li
              onClick={() => {
                setNav(!nav);
              }}
              className="p-4 border-b border-b-gray-600"
            >
              <Link to="/technicalprogramcommittee">
                Technical Program Committee
              </Link>
            </li>
            <li
              onClick={() => {
                setNav(!nav);
              }}
              className="p-4 border-b border-b-gray-600"
            >
              <Link to="/internationaladvisorycommittee">
                International Advisory Committee
              </Link>
            </li>

            <li
              onClick={() => {
                setNav(!nav);
              }}
              className="p-4 border-b border-b-gray-600"
            >
              <Link to="/callforpapers">Call For Papers</Link>
            </li>
            <li
              onClick={() => {
                setNav(!nav);
              }}
              className="p-4 border-b border-b-gray-600"
            >
              <Link to="/registration">Registration</Link>
            </li>

            <li
              onClick={() => {
                setNav(!nav);
              }}
              className="p-4 border-b border-b-gray-600"
            >
              {" "}
              <Link to="/program">Program</Link>
            </li>
            <li
              onClick={() => {
                setNav(!nav);
              }}
              className="p-4 border-b border-b-gray-600"
            >
              {" "}
              <Link to="/aboutbhubaneswar">About Bhubaneswar</Link>
            </li>
            <li
              onClick={() => {
                setNav(!nav);
              }}
              className="p-4 "
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
