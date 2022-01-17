import React, { useState } from "react"
import Error from '../common/Error'
import Validation from '../common/Validation'
import ValidationSuccess from '../common/ValidationSuccess'
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
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMatches, setPasswordMatches] = useState(true)
  const [passwordMatchWarning, setPasswordMatchWarning] = useState('')
  // const [tosConfirmed, setTosConfirmed] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(true)
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

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    setLoginData({
      ...loginData,
      [name]: value
    })
    console.log(event.target.checked)
  }

  console.log('userData', loginData)

  const handleConfirmPassword = (event) => {
    const value = event.target.value
    setConfirmPassword(value)
  }

  const checkPasswordMatch = (event) => {
    const value = event.target.value
    if (loginData.password !== value) {
      setPasswordMatches(false)
      setPasswordMatchWarning('Passwords do not match')
    } else {
      setPasswordMatches(true)
      setPasswordMatchWarning('')
    }
  }

  // const handleTosConfirmed = (event) => {
  //   const value = event.target.checked
  //   setTosConfirmed(value)
  // }

  const handleVerifyEmail = (event) => {
    const value = event.target.value
    if (value) {
      const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
      setIsEmailValid(emailCheck)
    }
  }

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
                    onChange={handleChange}
                    onBlur={handleVerifyEmail}
                    required
                  />
                </div>
                {
                  !isEmailValid ? <Error message='Must be a valid email' /> : null
                }
                <div className={inputField}>
                  {" "}
                  <span>
                    <RiLockPasswordFill className={icon} />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
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
                    name="confirmPassword"
                    placeholder="Re-type Password"
                    onChange={handleConfirmPassword}
                    onBlur={checkPasswordMatch}
                    required
                  />
                </div>
                {
                  passwordMatches ? null : <Error message={passwordMatchWarning}/>
              }
                {/* <div className={inputField}>
                  <div className={checkboxOption}>
                    <input type="checkbox" id="cb1" onChange={handleChange} name='tosConfirmed'/>
                    <label for="cb1">I agree with terms and conditions</label>
                  </div>
                </div> */}
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
