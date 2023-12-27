import React from 'react'
import "./WorkCardStyles.css"

import { NavLink } from 'react-router-dom'

const WorkCard = ({imgsrc, title, text, view}) => {
  return (
    <div className="project-card">
        <img src={imgsrc} alt="img" />
        <h2 className="project-title">{title}</h2>
        <div className="project-details">
        <p>{text}</p>
        <div className="pro-btns">
            <NavLink to={view} className="btn">View</NavLink>
            <NavLink to={view} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard;