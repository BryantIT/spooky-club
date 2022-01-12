import React, { Fragment } from "react"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { CgProfile } from "react-icons/cg"
import styles from "./styles.module.css"

const UserAccess = () => {
  const {
    formWrapper,
    row,
    formContainer,
    titleContainer,
    rows,
    inputField,
    icon,
    radioOption,
    selectOption,
    selectArrow,
    checkboxOption,
    button,
  } = styles
  return (
    <div className={row}>
      <div className={formWrapper}>
        <div className={formContainer}>
          <div className={titleContainer}>
            <h2>Registration Form</h2>
          </div>
          <div className={rows}>
            <div className="">
              <form>
                <div className={inputField}>
                  {" "}
                  <span>
                    <FaEnvelope className={icon} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={inputField}>
                  {" "}
                  <span>
                    <RiLockPasswordFill className={icon} />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className={inputField}>
                  {" "}
                  <span>
                    <RiLockPasswordFill className={icon} />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    required
                  />
                </div>
                <div className={inputField}>
                  <div className={checkboxOption}>
                    <input type="checkbox" id="cb1" />
                    <label for="cb1">I agree with terms and conditions</label>
                  </div>
                </div>
                <input className={button} type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAccess
