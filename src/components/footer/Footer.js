import React from "react"
import styles from "./styles.module.css"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare
 } from 'react-icons/fa'

const Footer = () => {
  const {
    footer,
    left,
    links,
    companyName,
    center,
    right,
    iconWrapper,
    footerCompanyAbout,
    footerIcons
   } = styles
   
  return (
    <footer className={footer}>
      <div className={left}>
        <h3>
          WebDev<span>Trick</span>
        </h3>

        <p className={links}>
          <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
          <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
        </p>

        <p className={companyName}>webdevtrick &copy; 2019</p>
      </div>

      <div className={center}>
        <div>
          <span className={iconWrapper}><FaMapMarkerAlt size={20}/></span>
          <p>
            <span>21 Revolution Street</span> Delhi, India
          </p>
        </div>

        <div>
          <span className={iconWrapper}><FaPhoneAlt size={20}/></span>
          <p>+1 555 123456</p>
        </div>

        <div>
          <span className={iconWrapper}><FaEnvelope size={20}/></span>
          <p>
            <a href="mailto:support@company.com">contact@webdevtrick.com</a>
          </p>
        </div>
      </div>

      <div className={right}>
        <p className={footerCompanyAbout}>
          <span>About the company</span>
          Web Dev Trick is a blog for web designers, graphic designers, web
          developers &amp; SEO Learner.
        </p>

        <div className={footerIcons}>
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <FaTwitterSquare />
          </a>
          <a href="#">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
