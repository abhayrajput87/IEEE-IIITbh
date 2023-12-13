import React from "react";

function Important() {
  return (
    <div className="w-[80%] mx-auto text-black mt-24 mb-8 ">
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
  );
}

export default Important;
