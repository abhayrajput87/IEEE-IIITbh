import React from 'react'

function Contact() {
  return (
    <div>
        <div className='flex flex-col md:flex-row bg-gray-400   ' >
            <div className='bg-blue-700 text-white my-4 py-8 p-4 md:w-1/2 ' >
                <h1 className='text-white font-bold text-2xl ' >Contact</h1>
                <p className='mx-4 font-bold text-xl' >
                    Dr. Pradyut Kumar Biswal
                </p>
                <p className='mx-4' >
                    Organizing Chair, ASPCC-2024
                </p>
                <a className='mx-4 hover:underline' href="mailto:aspcc@iiit-bh.ac.in">Email: aspcc@iiit-bh.ac.in</a>
            </div>
            <div className='bg-[#036F78] text-white my-4 py-8 p-4 md:w-1/2' >
                <h1 className='text-white font-bold text-2xl ' >Sponsors</h1>
                <p className='mx-4' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus ipsa quaerat laboriosam earum reiciendis magnam tenetur asperiores aspernatur consectetur!
                </p>
            </div>
            

        </div>
    </div>
  )
}

export default Contact