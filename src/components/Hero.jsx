import React from 'react';
import heroPic from '../assets/About/aboutus.png'

function Hero({ dates }) {
  const impDate = dates.map((date, index) => {
    return <li className='flex ml-4 mt-1' key={index}>{date.heading}: <p className='mx-2 text-xl ' >{date.content}</p> </li>;
  });

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
      <div className="absolute inset-0 flex flex-col text-center items-center md:mt-16 justify-center bg-opacity-75 text-white font-fontawesome">
      <h1 className='md:text-8xl text-4xl mb-4 mt-4 font-bold ' >
            IEEE ASPCC 2024
          </h1>
          <p className='md:text-3xl text-xl md:px-16 font-medium  mb-2' >
          1st International Conference on Advances in Signal Processing, Power, Communication and Computing
          </p>
            
          <p className='text-xl mb-2' >
          (6th to 8th June 2023)
          </p>
          <p className='text-xl mb-2' >
          IIIT Bhubaneswar, India
          </p>
      </div>
    </div>

     
          {/* <div className='bg-green-900 p-4 flex flex-col text-center justify-center py-8 lg:w-2/3'>
          <h1 className='text-6xl mb-4 mt-4' >
            IEEE ASPCC 2024
          </h1>
          <p className='text-3xl text-yellow-400 mb-4' >
          First international conference on advances in signal processing ,power,communication and computing
          </p>
            
          <p className='text-xl mb-4' >
          (6th to 8th June 2023)
          </p>
          <p className='text-xl mb-4' >
          IIIT Bhubaneswar, India
          </p>
          </div> */}
      
    </>
  );
}

export default Hero;
