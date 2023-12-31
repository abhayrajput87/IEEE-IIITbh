import React from "react";
import heroPic from "../../assets/bgImg.jpeg";

function Hero() {
  return (
    <>
      <div className="relative min-h-screen" style={{ background: "#000" }}>
        {/* Background Image */}
        <img
          src={heroPic}
          alt="Background"
          className="w-full  h-screen object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col text-center items-center bg-black bg-opacity-50 md:mt-16 justify-center  text-white">
          <h1 className="md:text-8xl text-4xl mb-4 mt-4 font-bold ">
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
          <p className="text-xl text-green-500  animate-bounce font-bold mb-2">
            Date of conference: 19<sup class="superscript">th</sup> to 21
            <sup class="superscript">st</sup> December 2024
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
