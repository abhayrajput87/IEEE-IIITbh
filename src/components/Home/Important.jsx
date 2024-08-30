import React from "react";

function Important() {
  return (
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
        Paper submission deadline (<i>1st Round</i>):
        <span className=" font-bold line-through"> 1st August 2024</span>
      </li>
      <li>
        Paper submission final deadline (<i>2nd Round</i>):
        <span className=" font-bold"> 10th September 2024</span>
      </li>
      <li>
        Paper acceptance notification:
        <span className=" font-bold "> 30th September 2024</span>
      </li>
      <li>
        Camera ready submission and registration deadline:
        <span className=" font-bold">31st October 2024</span>
      </li>
    </ul>
  );
}

export default Important;
