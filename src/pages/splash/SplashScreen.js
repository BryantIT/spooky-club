import React, { useState, useEffect } from "react"
import styles from "./styles.module.css"
import { Link } from 'react-router-dom'

const SplashScreen = ({ endSplash }) => {
  const [showButton, setShowButton] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const {
    container,
    content,
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    btn,
    logo
  } = styles

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true)
      setShowLogo(true)
    }, 15000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true)
    }, 10000)
  }, [])
  return (
    <div className={container}>
      <div className={content}>
        <h2 className={frame1}>We are believers of the unknown</h2>
        <h2 className={frame2}>We are paranormal investigators</h2>
        <h2 className={frame3}>We are here to help</h2>
        <h2 className={frame4}>If you are ready</h2>
        <h2 className={frame5}>
          {
            showLogo ?
            <div className={logo}>
              <Link to='/'></Link>
          </div> : null
          }
        <span>We are the Myst and Orb Society</span>
        <br />
        {
          showButton ?
          <button className={btn} onClick={endSplash}>Enter Here</button> : null
        }
        </h2>
      </div>
    </div>
  )
}

export default SplashScreen
