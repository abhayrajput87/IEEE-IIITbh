import React from "react";
import "./style.css";

function ImpDates({ children }) {
  return (
    <div className="text-wrapper mt-32 lg:mt-8 ">
      <h1 className="date">{children}</h1>
      <h1 className="date">Important Dates 19th to 21st December 2024</h1>
    </div>
  );
}

export default ImpDates;
