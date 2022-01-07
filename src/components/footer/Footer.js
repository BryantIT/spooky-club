import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"
import Logo from "../logo/Logo"

const Footer = () => {
  const [year, setYear] = useState("")

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYear(currentYear)
  }, [])
  const {
    footer,
    left,
    companyName,
    center,
    right,
    iconWrapper,
    footerCompanyAbout,
    footerIcons,
  } = styles

  return (
    <footer className={footer}>
      <div className={left}>
        <p className={companyName}>Myst and Orb Society &copy; {year}</p>
      </div>
      <div className={center}>
        {/* <div>
          <span className={iconWrapper}>
            <FaMapMarkerAlt size={20} />
          </span>
          <p>
            <span>21 Revolution Street</span> Delhi, India
          </p>
        </div> */}

        <div>
          <span className={iconWrapper}>
            <FaPhoneAlt size={20} />
          </span>
          <p>+1 855 675 1855</p>
        </div>

        <div>
          <span className={iconWrapper}>
            <FaEnvelope size={20} />
          </span>
          <p>
            <a href="mailto:investigator@mystandorbsociety.com">investigator@mystandorbsociety.com</a>
          </p>
        </div>
      </div>
      <div className={right}>
        <div className={footerIcons}>
          <a href="https://www.facebook.com/Myst-and-Orb-Society-100944138757824" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com/Mystandorb" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare />
          </a>
          <a href="https://www.instagram.com/mystandorbsociety/" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
