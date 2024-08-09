import React from "react";
import "./style.css";

function ImpDates({ children }) {
  return (
    <div className="text-wrapper mt-32 lg:mt-8 ">
      <h1 className="date">{children}</h1>
      <h1 className="date">
        2nd round submission is open till 30th August 2024
      </h1>
      <h1 className="date">1st Round submitted papers are under review</h1>
    </div>
  );
}

export default ImpDates;
