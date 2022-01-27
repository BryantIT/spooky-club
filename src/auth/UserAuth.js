import React, { useContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { auth, db, googleProvider } from '../firebase-config'
import { getDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [userInfo, setUserInfo] = useState()


  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignup = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      setCurrentUser(user)
      navigate('/profile')
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = GoogleAuthProvider.credentialFromError(error)
    })
  }

  const signout = () => {
    return signOut(auth)
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
        const userDoc = await doc(db, 'users', currentUser.uid)
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
    userInfo,
    googleSignup
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
