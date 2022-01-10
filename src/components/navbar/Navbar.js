import React, { Fragment, useState } from "react"
// import {
//   Row,
//   Header,
//   NavWrap,
//   MainNav,
//   StyledLink,
//   SignUpLink,
// } from "./Styles";
import { Link } from "react-router-dom"
import styles from './styles.module.css'

const Navbar = () => {
  const [checkActive, setCheckActive] = useState(false)
  const { menuBtn, close, wrapper, active } = styles

  const handleMenuClick = () => {
    setCheckActive(!checkActive)
  }
  return (
    <Fragment>
      <input
        type="checkbox"
        id={active}
        checked={checkActive}
        onClick={handleMenuClick}
      />
    <label for={active} className={menuBtn}>
        <span></span>
      </label>
      <label for={active} className={close} onClick={handleMenuClick}></label>
    <div className={wrapper}>
        <ul>
          <li>
            <Link to="/" onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleMenuClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/user-access" onClick={handleMenuClick}>
              Register/Login
            </Link>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Navbar
