import React from 'react';
import heroPic from '../assets/bgImage.jpeg'

function Hero() {
  // const impDate = dates.map((date, index) => {
  //   return <li className='flex ml-4 mt-1' key={index}>{date.heading}: <p className='mx-2 text-xl ' >{date.content}</p> </li>;
  // });

  return (
    <>
    <div className="relative min-h-screen" style={{background:"#000"}}>
      {/* Background Image */}
      <img
        src={heroPic}

        alt="Background"
        className="w-full  h-screen object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col text-center items-center bg-black bg-opacity-50 md:mt-16 justify-center  text-white">
      <h1 className='md:text-8xl text-4xl mb-4 mt-4 font-bold ' >
            IEEE ASPCC 2024
          </h1>
          <p className='md:text-3xl text-xl md:px-16 font-medium  mb-2' >
          1st International Conference on Advances in Signal Processing, Power, Communication and Computing
          </p>
            
          <p className='text-xl mb-2' >
          (6th to 8th June 2024)
          </p>
          <p className='text-xl mb-2' >
          IIIT Bhubaneswar, India
          </p>
      </div>
    </div>      
    </>
  );
}

export default Hero;
