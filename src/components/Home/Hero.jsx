import React from "react";
import heroPic from "../../assets/bgImg.jpeg";
import ImpDates from "../slidingText/ImpDates";
function Hero() {
  return (
    <>
      <div className="relative " style={{ background: "#000" }}>
        {/* Background Image */}
        <img
          src={heroPic}
          alt="Background"
          className="w-full  h-screen object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 items-center bg-black bg-opacity-50 md:mt-16 justify-center  text-white">
          <ImpDates>Important Dates 19th to 21st December 2024</ImpDates>
          <div className="flex items-center">
            <div className="hidden md:flex  h-[200px] bg-yellow-500  rounded-xl justify-center m-4 md:m-8 p-4 md:flex-col">
              <p className="text-2xl font-bold ">Conference Record #62191</p>
              <a
                className="text-blue-500 font-bold underline"
                href="http://conferences.ieee.org/conferences_events/conferences/conferencedetails/62191%7C"
              >
                Click on the Link
              </a>
            </div>
            <div className="flex flex-col   text-center">
              <h1 className="md:text-6xl text-4xl   mb-4 font-bold ">
                ASPCC 2024
              </h1>
              <p className="md:text-3xl text-xl md:px-16 font-bold  mb-2">
                1st International Conference on Advances in Signal Processing,
                Power, <br /> Communication and Computing
              </p>
              <p className="text-2xl">Organised by</p>
              <p className="text-2xl">
                Department of Electronics & Telecommunication Engineering{" "}
              </p>
              <p className="text-2xl">And</p>
              <p className="text-xl">
                Department of Electrical Engineering, IIIT Bhubaneswar India
              </p>
              <p className="text-xl"> in collaboration with</p>

              <p className="text-xl mb-1">
                IEEE student branch, IIIT Bhubaneswar India
              </p>
              <p>
                The conference shall be conducted in technical collaboration
                with IEEE Bhubaneswar Subsection, IEEE Kolkata section, IEEE
                communications and computer joint society Chandipur
              </p>
              <p className="text-xl text-green-500  animate-bounce font-bold mb-2">
                Date of conference: 19<sup class="superscript">th</sup> to 21
                <sup class="superscript">st</sup> December 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
