import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'
import Hero3 from '../components/Hero3'

const About = () => {
  return (
    <div className=''>
        <Navbar /> 
        <Hero2 heading={"about"} text={"I am a lead frontend developer"} /> 
        <AboutContent />
        <Footer />
    </div>
  )
}

export default About