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
import "./styles.css"

const Navbar = () => {
  const [checkActive, setCheckActive] = useState(false)

  const handleMenuClick = () => {
    setCheckActive(!checkActive)
  }
  return (
    <Fragment>
      <input
        type="checkbox"
        id="active"
        checked={checkActive}
        onClick={handleMenuClick}
      />
      <label for="active" class="menu-btn">
        <span></span>
      </label>
      <label for="active" class="close" onClick={handleMenuClick}></label>
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/" onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Navbar
