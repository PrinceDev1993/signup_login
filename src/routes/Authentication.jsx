import React, { useState } from 'react'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Signup from '../components/Signup'
import Hero3 from '../components/Hero3'

const Authentication = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <Navbar />
      <Hero3 heading={"Get connected Today"} text={"Become a member!"} />
      {toggle ? ( <Login toggleForm={handleToggle} />) : (<Signup toggleForm={handleToggle} />)}
      <Footer />
    </div>
  )
}

export default Authentication

