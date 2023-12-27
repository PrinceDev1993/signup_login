import React, { useState } from 'react'
import './LoginStyles.css'
import userLogin from '../auth/userLogin'
import { useNavigate, useLocation } from 'react-router-dom';

function Login({toggleForm}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate();
    const location = useLocation(); 

    //if the location state has a path name then remove that path name of there.
    //and then have them go back to the page they were before being redirected to the
    //authentication page. OR if they were not there, they will just go to the protected page (project page) .
    const from = location.state?.from?.pathname || "/Project";

    const {error, login} = userLogin()

    const handleLogin = async (e) => {
      e.preventDefault();
      await login(email, password);
      if(!error) {
        navigate(from, {replace : true})
        setEmail("") //clear email field
        setPassword("") //clear password field
        return;
      } else {
        setErrorMessage(error)
      }
    }

  return (
    <div className='divForm'>
        <h2>Login in to your account</h2>
        <form action="" className='loginForm' onSubmit={handleLogin}>
            <input 
              type="email" 
              name="email" 
              placeholder='Email Address' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />  
            
            <br /> 

            <input
              type="password"
              name="password"
              placeholder='Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            
            <br />

            {error && <p className = "error">2{errorMessage}</p> }

            <button type='submit' className="btn1">Login</button>
        </form>
        
        <p>Have no account?</p>
        <button onClick={toggleForm} className="btn1">Sign up</button>
    </div>
  )
}

export default Login