import React from 'react';

function Hero({ dates }) {
  const impDate = dates.map((date, index) => {
    return <li className='flex ml-4 mt-1' key={index}>{date.heading}: <p className='mx-2 text-xl ' >{date.content}</p> </li>;
  });

  return (
    <>
      <div className='-z-40   bg-blue-500 h-full w-full'>
        <div className='top-[10%] lg:flex  py-5'>
          <div className='bg-black p-4  lg:w-1/3'>
          <div>
            <h1 className='font-bold text-2xl' >Important Dates</h1>
          </div>
            <ul className='list-disc text-white mt-4' >{impDate}</ul>
          </div>
          <div className='bg-green-900 p-4 flex flex-col text-center justify-center py-8 lg:w-2/3'>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
