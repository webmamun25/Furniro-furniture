/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext=createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)
    const [buy,setBuy]=useState([])
    const [loading,setLoading]=useState(true)

   

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signinUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser=()=>{
        return signOut(auth)
    }
   

   

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signinUser,
        logoutUser,
        buy,
        setBuy

    }
  return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders