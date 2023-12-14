import React from "react";
import image from "../../../assets/UpdatePage/aboutus.png";

function CallForPapers() {
  return (
    <div className="relative" style={{ background: "#000" }}>
      {/* Background Image */}
      <img
        src={image}
        alt="Background"
        className=" h-screen w-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-75 text-white font-fontawesome">
        <h1 className="text-6xl px-8  md:px-16 text-center font-bold mb-4 mt-5">
          Paper submission starts from 20th December 2023
        </h1>
      </div>
    </div>
  );
}

export default CallForPapers;
