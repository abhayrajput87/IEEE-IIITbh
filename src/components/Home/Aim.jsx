import React from "react";
import touch from "../../assets/Navbar/touch.jpg";

function Aim() {
  return (
    <>
      <div className="flex bg-[#f3f3f3]  pt-8 md:pt-16 md:flex-row">
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
        <div className="w-1/2 mx-auto text-black px-8 mb-8 ">
          <h1 className="font-bold text-4xl mb-4 ">Important Dates</h1>
          <div className="border-2 rounded-lg font-sans p-8  border-gray-400">
            <ul className="list-disc font-semibold space-y-2">
              <li>
                Paper submission starts:
                <span className=" font-bold">20th December 2023</span>
              </li>
              <li>
                Date of conference:
                <span className=" font-bold">19th to 21st December 2024</span>
              </li>
              <li>
                Paper submission deadline:
                <span className=" font-bold"> 1st August 2024</span>
              </li>
              <li>
                Paper acceptance notification:
                <span className=" font-bold"> 30th September 2024</span>
              </li>
              <li>
                Camera ready submission and registration deadline:
                <span className=" font-bold">31st October 2024</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aim;
