import React from "react";
import "./style.css";

function ImpDates({ children }) {
  return (
    <div className="text-wrapper mt-32">
      <h1 className="date">{children}</h1>
      <h1 className="date">{children}</h1>
      <h1 className="date">{children}</h1>
      <h1 className="date">{children}</h1>
      <h1 className="date">{children}</h1>
      <h1 className="date">{children}</h1>
    </div>
  );
}

export default ImpDates;
