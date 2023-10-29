import React from 'react'
import Update from '../components/AboutUs/Update'
import Navbar from '../components/Navbar';
function UpdatePage({name}) {
  return (
    <div>
        <Navbar/>
        <Update name={name} />
      

    </div>
  )
}

export default UpdatePage;