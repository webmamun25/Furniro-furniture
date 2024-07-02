import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
     const {loading,user}=useContext(AuthContext)
     const location=useLocation()
     if(loading){
        return <p>Loading....</p>
     }
     if(user?.email){
        return children

     }

  return (
    <Navigate state={location.pathname} to='/signin'></Navigate>
  )
}

export default PrivateRoute