import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar /> 
      <Hero2 heading={"contact"} text={"You can contact us today"} /> 
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact