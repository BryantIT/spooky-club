import React, { useContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from '../firebase-config'
import { getDoc, doc } from 'firebase/firestore'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [userInfo, setUserInfo] = useState()


  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signout = () => {
    return signOut()
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if(currentUser) {
      const setUserData = async () => {
        const userDoc = await doc(db, 'test', currentUser.uid)
        getDoc(userDoc)
        .then((doc) => {
          setUserInfo(doc.data())
        })
      }
      setUserData()
    }
  }, [currentUser])

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    userInfo
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
