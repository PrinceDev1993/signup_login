import "./AboutContentStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"
import img10 from "./images/img10.png"
import img11 from "./images/img11.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>who i am</h1>
        <p>I am a marriage counselor and frontend developer. I guide youths into creating an adorable home and I create responsive websites. </p>
        <NavLink to={"/Contact"} className="btn">Contact</NavLink>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img10} alt="true" className="img" />
          </div>

          <div className="img-stack bottom">
            <img src={img11} alt="true" className="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent