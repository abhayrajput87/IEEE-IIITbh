import React from 'react'
import touch from '../assets/Navbar/touch.jpg'

function Aim() {
  return (
    <>
        <div className='flex flex-col pt-8 md:flex-row' >
        <div className=' md:w-1/2' >
            <img  className='object-cover h-2/3 w-[100%] mx-auto p-4' src={touch} alt="" />
           <div className='flex  justify-center items-center' >
            <button className= ' bg-green-400 text-wite py-2 px-8  rounded-lg ' >Brochure</button>
            </div>
        </div>
        <div className=' md:w-1/2 text-black text-left md:mx-4 p-4' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi ab mollitia necessitatibus quibusdam possimus reprehenderit porro quam, laboriosam nesciunt iste, molestias eligendi ipsam asperiores quidem, natus harum culpa qui quia explicabo debitis nobis? Inventore sed dolorem maxime quaerat ipsam reprehenderit, est dolorum possimus expedita. Corrupti, commodi. Adipisci, blanditiis? Vitae molestias dicta esse id illo natus ducimus sed dolorum quae!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium consequuntur iusto pariatur, aliquam quibusdam voluptates nemo nulla accusamus? Error quidem est laboriosam, sint harum fugiat tenetur cum quae libero sunt illum nihil iusto incidunt quas amet necessitatibus ullam dolorum maxime!
        </div>
        </div>
     
    </>
  )
}

export default Aim;