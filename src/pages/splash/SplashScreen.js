import React, { useState, useEffect } from "react"
import "./styles.css"

const SplashScreen = ({ endSplash }) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true)
    }, 15000)
  }, [])
  return (
    <div className="container">
      <div className="content">
        <h2 className="frame-1">We are believers of the unknown</h2>
        <h2 className="frame-2">We are paranormal investigators</h2>
        <h2 className="frame-3">We are here to help</h2>
      <h2 className="frame-4">If you are ready</h2>
        <h2 className="frame-5">
          <span>We are the Myst and Orb Society</span>
          <br />
        {
          showButton ?
          <button className='btn' onClick={endSplash}>Enter Here</button> : null
        }
        </h2>
      </div>
    </div>
  )
}

export default SplashScreen
