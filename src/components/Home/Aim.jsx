import React from "react";
import touch from "../../assets/Navbar/touch.jpg";
import Important from "./Important";

function Aim() {
  return (
    <>
      <div className="flex flex-col bg-[#f3f3f3]  pt-8 md:pt-16 md:flex-row">
        <div className="md:w-1/2">
          <img
            className="object-cover h-[300px] w-[100%] mx-auto p-4"
            src={touch}
            alt=""
          />
          <div className="flex  justify-center items-center">
            <button className=" bg-green-600 text-wite py-2 px-8 hover:bg-green-500 hover:duration-500 text-[#f3f3f3]  rounded-lg ">
              Brochure
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mx-auto text-black px-8 mb-8 ">
          <h1 className="font-bold text-4xl mb-4 ">Important Dates</h1>
          <div className="border-2 rounded-lg font-sans p-8  border-gray-400">
            <Important />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aim;
