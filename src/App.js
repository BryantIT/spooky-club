import React, { Fragment, useEffect, useState } from "react"
// import Landing from "./pages/landing/Landing"
import Main from "./pages/Main/Main"
import Navbar from './components/navbar/Navbar'
import SplashScreen from './pages/splash/SplashScreen'
// import { Wrapper, Pages } from "./Styles"
import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import { db } from './firebase-config'
import { collection, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { AuthProvider } from './auth/UserAuth'

function App() {
  const [enterSite, setEnterSite] = useState(false)
  const [testName, setTestName] = useState('Bob')
  const [test, setTest] = useState([])
  const [single, setSingle] = useState(null)
  const testRef = collection(db, 'test')
  const testID = 'RbbfVf4C6de3g8V4NNjC'

  const endSplash = () => {
    setEnterSite(true)
  }

  useEffect(() => {
    // How to get all documents in a collection
    const getTest = async () => {
      const data = await getDocs(testRef)
      setTest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTest()
  }, [])

  // How to get single doc
  const setDoc = async () => {
    const singleRef = await doc(db, 'test', testID)
    getDoc(singleRef)
    .then((doc) => {
      setSingle(doc.data())
    })
  }


  // How to create a document
  const createTest = async () => {
    await addDoc(testRef, { name: testName })
  }

  // How to update a doc
  const updateTest = async () => {
    const testDoc = doc(db, 'test', testID)
    const newFields = {name: 'Bryant'}
    await updateDoc(testDoc, newFields)
  }

  // How to delete a doc
  const deleteTest = async () => {
    const testDoc = doc(db, 'test', testID)
    await deleteDoc(testDoc)
  }
  return (
    <AuthProvider>
      <Fragment>
        {
          enterSite ?
          <Fragment>
            <Navbar />
            <Routes>
              {/* <Route path="/" element={<Landing />} /> */}
              {/* <Route path="/" element={<Main />} /> */}
            </Routes>
          </Fragment> : <SplashScreen endSplash={endSplash} />
        }
      </Fragment>
    </AuthProvider>
  )
}

export default App;
