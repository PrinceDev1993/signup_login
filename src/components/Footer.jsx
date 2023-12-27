import React from 'react'
import './FooterStyles.css'
import {FaTwitter, FaLinkedin, FaHome, FaMailBulk, FaPhone} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {MdCall} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer lastF' >
        <div className='address'>
            <div className='addLine'> <FaHome /> <p>23 federal housing, woji</p> </div>
            <div className='addLine'> <FaPhone /> <p>07037214108</p>  </div>
            <div className='addLine'> <FaMailBulk /> <p>evangelize4me@gmail.com</p> </div>
        </div>

        <div className='footer_abt'>
            <h2>About the company</h2>
            <p>This is Onyebuchi Princewill. CEO and founder of PrinceDev Tenchnologies. I enjoy discussing new projects and design challenges.</p>
            <div className='FIcons'>
                <BsFacebook size={30} style={{color:"#fff"}} />
                <FaTwitter size={30} style={{color:"#fff"}} className='twitter'/>
                <FaLinkedin size={30} style={{color:"#fff"}}/>
            </div>
        </div>
        
    </div>
  )
}

export default Footer