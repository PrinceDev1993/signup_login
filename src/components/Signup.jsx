import React, { useState } from 'react'
import './LoginStyles.css'
import { useLocation, useNavigate } from 'react-router-dom';
import userSignup from '../auth/userSignup'

function Signup({toggleForm}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null) 

    const navigate = useNavigate();
    const location = useLocation(); 

    const from = location.state?.from?.pathname || "/Project"

    const {error, signUp} = userSignup();

    const handleSignOut = async (e) => {
      e.preventDefault();

      await signUp(email, password)

      if(!error){
         navigate(from, {replace : true})
         setEmail("")
         setPassword("")

         return 
      } else {
        setErrorMessage(error)
      }

    }

  return (
    <div className='divForm'>
        <h2>Create your account</h2>
        <form action="" className='loginForm' onSubmit={handleSignOut}>
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

          {error && <p className = "error">1{errorMessage}</p> }

          <br />
          
          <button type='submit' className="btn1">Sign in</button>
        </form>
        <p>Have an account?</p>
        <button onClick={toggleForm} className="btn1">Log in</button>
    </div>
  )
}

export default Signup