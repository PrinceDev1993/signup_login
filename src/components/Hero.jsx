import React from 'react'
import { Link } from 'react-router-dom'
import './HeroStyles.css'
import img4 from './images/img-4.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="mask">
          <img src={img4} alt="football field in the water" className='bgImg' />
        </div>

        <div className="content">
          <p>HI, I AM A TECH BRO</p>
          <h1>Frontend Developer</h1>

          <div>
            <Link to='/Project'>
              <button className="btn">PROJECTS</button>
            </Link>

            <Link to='/Contact'>
              <button className=" btn btn-light">CONTACT</button>
            </Link>
          </div>
        </div>

        
    </div>
  )
}

export default Hero