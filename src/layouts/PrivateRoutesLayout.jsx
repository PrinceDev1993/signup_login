import React from 'react'
import { Outlet, useLocation, Navigate } from "react-router-dom";
//the outlet renders any child that is within the layout.
import { projectAuth } from "../firebase/config";

const PrivateRoutesLayout = () => {
    const location = useLocation()
  return projectAuth.currentUser ? (<Outlet />) : (<Navigate to="/Signup" state={{from: location}} replace />)
}

export default PrivateRoutesLayout

