import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import {FaBars, FaTimes, FaTypo3, FaSun} from 'react-icons/fa'
import {MdDarkMode} from 'react-icons/md'
import { projectAuth } from "../firebase/config";
import userLogOut from "../auth/userLogOut"
import {useNavigate} from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const {error, logOut} = userLogOut()

    const handLogOut = async() => {
        await logOut()
        
        if(!error){
            navigate("/")
        }
    }

    const [toggle, setToggle] = useState(false);
    const handToggle = () => setToggle(!toggle)

    const [color, setColor] = useState(false)
    const colorChange = () => {
        if (window.scrollY > 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", colorChange)

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to='/'>
           <h1> PrinceDev <FaTypo3 /> </h1> 
        </Link>

        {/* className='navMenu' */}
        <ul className={toggle ? "navMenu" : "navMenu active"}  >
            <li>
                <Link to='/'> Home </Link>
            </li>

            <li>
                <Link to='/Project'> Project </Link>
            </li>

            <li>
                <Link to='/About'> About</Link>
            </li>

            <li>
                <Link to='/Contact'> Contact </Link>
            </li>

            {projectAuth.currentUser ? (
                <li>
                    <button className="btnOut" onClick={handLogOut}>Log out</button>
                </li>
            ) : (
            <li>
                <Link to='/Signup'> Sign up </Link>
            </li>
            )}
        </ul>

        <div className='hamburger' onClick={handToggle}>
            {toggle ? (<FaTimes size={25} style={{color : "#fff"}} />) :  (<FaBars size={25} style={{color : "#fff"}} />)}
        </div>
    </div>

  )
}

export default Navbar