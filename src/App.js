import React, { Fragment } from "react"
// import Landing from "./pages/landing/Landing"
import { AuthProvider } from './auth/UserAuth'
import Main from "./pages/Main/Main"
import Navbar from './components/navbar/Navbar'
// import { Wrapper, Pages } from "./Styles"
import "./App.css"
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          {/* <Route path="/" element={<Main />} /> */}
        </Routes>
      </AuthProvider>
    </Fragment>
  )
}

export default App;
