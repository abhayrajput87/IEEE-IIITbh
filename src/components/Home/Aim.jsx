import React from 'react'
import touch from '../../assets/Navbar/touch.jpg'

function Aim() {
  return (
    <>
        <div className='flex bg-[#f3f3f3] flex-col pt-8 md:pt-16 md:flex-row' >
        <div className=' md:w-1/2' >
            <img  className='object-cover h-2/3 w-[100%] mx-auto p-4' src={touch} alt="" />
           <div className='flex  justify-center items-center' >
            <button className= ' bg-green-600 text-wite py-2 px-8 hover:bg-green-500 hover:duration-500 text-[#f3f3f3]  rounded-lg ' >Brochure</button>
            </div>
        </div>
        <div className=' md:w-1/2 text-black text-left md:mx-4 p-4' >
          Content will be added soon
        </div>
        </div>
     
    </>
  )
}

export default Aim;