import React from 'react'
import About from '../components/AboutUs/AboutHero'
import Navbar from '../components/Navbar';
import Content from '../components/AboutUs/Content';
function AboutPage() {
  return (
    <div>
        <Navbar/>
        <About/>
        <Content/>

    </div>
  )
}

export default AboutPage;