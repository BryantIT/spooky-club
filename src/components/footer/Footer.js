import React from "react"
import styles from "./styles.module.css"

const Footer = () => {
  const { footer, left, links, companyName, center, right } = styles
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
          <i className="fa fa-map-marker"></i>
          <p>
            <span>21 Revolution Street</span> Delhi, India
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1 555 123456</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">contact@webdevtrick.com</a>
          </p>
        </div>
      </div>

      <div className={right}>
        <p className="footer-company-about">
          <span>About the company</span>
          Web Dev Trick is a blog for web designers, graphic designers, web
          developers &amp; SEO Learner.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
