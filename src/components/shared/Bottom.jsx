import React from 'react'
import ieee from '../../assets/Navbar/iiit.jpg'

function Bottom() {
  return (
    <div className='bg-white flex justify-between' >
        <div className='p-2 flex items-center space-x-4 ' >
             <img className='w-16 h-16 '  src={ieee} alt="" />
     </div>
     <div>
        <h1 className='text-black mr-16 mt-8' >All rights reserved</h1>
     </div>

    </div>
  )
}

export default Bottom;