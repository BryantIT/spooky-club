import React, { useState, Fragment, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// Components
import Error from "../common/Error";
import Validation from "../common/Validation";
import ValidationSuccess from "../common/ValidationSuccess";
// Firebase
import { useAuth } from "../../auth/UserAuth";
// Styles
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import styles from "./styles.module.css";

const UserAccess = ({ handleBack }) => {
  // Common
  const { signup, googleSignup, currentUser } = useAuth();

  const navigate = useNavigate();
  // States
  const [useEmailSignup, setUseEmailSignup] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatches, setPasswordMatches] = useState(true);
  const [passwordMatchWarning, setPasswordMatchWarning] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  // const [tosConfirmed, setTosConfirmed] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [signupErrorMessage, setSignupErrorMessage] = useState("");
  // Styles
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
    buttonWrapper,
    button,
    linkWrapper,
  } = styles;

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  const handleEmailSignup = () => {
    setUseEmailSignup(!useEmailSignup);
  };
  const handleGoogleSingup = () => {
    googleSignup();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleConfirmPassword = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const checkPasswordMatch = (event) => {
    const value = event.target.value;
    if (loginData.password !== value) {
      setPasswordMatches(false);
      setPasswordMatchWarning("Passwords do not match");
    } else {
      setPasswordMatches(true);
      setPasswordMatchWarning("");
    }
  };

  // const handleTosConfirmed = (event) => {
  //   const value = event.target.checked
  //   setTosConfirmed(value)
  // }

  const handleVerifyEmail = (event) => {
    const value = event.target.value;
    if (value) {
      const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
      setIsEmailValid(emailCheck);
    }
  };
  const createFirebaseUser = async () => {
    try {
      await signup(loginData.email, loginData.password).then(
        setTimeout(() => {
          navigate('/profile')
        }, 1000)
      );
    } catch (error) {
      const stringed = JSON.stringify(error.message);
      const split = stringed.split(":");
      const message = split[1].replace('"', "");
      setSignupErrorMessage(message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isReady = false;
    if (
      passwordMatches &&
      loginData &&
      loginData.email &&
      loginData.password &&
      isEmailValid
    ) {
      setIsDisabled(true);
      createFirebaseUser();
    }
  };

  return (
    <div className={row}>
      <div className={formWrapper}>
        <div className={formContainer}>
          <div className={titleContainer}>
            <h2>Registration Form</h2>
          </div>
          <div className={rows}>
            <div className="">
              {useEmailSignup ? (
                <form onSubmit={handleSubmit}>
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
                  {!isEmailValid ? (
                    <Error message="Must be a valid email" />
                  ) : null}
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
                  {passwordMatches ? null : (
                    <Error message={passwordMatchWarning} />
                  )}
                  {/* <div className={inputField}>
                    <div className={checkboxOption}>
                      <input type="checkbox" id="cb1" onChange={handleChange} name='tosConfirmed'/>
                      <label htmlFor="cb1">I agree with terms and conditions</label>
                    </div>
                  </div> */}
                  <input
                    className={button}
                    type="submit"
                    value="Register"
                    disabled={isDisabled}
                  />
                  <div className={buttonWrapper}>
                    <button className={button} onClick={handleEmailSignup}>
                      Cancel
                    </button>
                  </div>
                  {signupErrorMessage ? (
                    <Error message={signupErrorMessage} />
                  ) : null}
                </form>
              ) : (
                <div>
                  <div className={buttonWrapper}>
                    <button className={button} onClick={handleEmailSignup}>
                      Email
                    </button>
                    <button className={button} onClick={handleGoogleSingup}>
                      Google
                    </button>
                  </div>
                  <div className={linkWrapper}>
                    <Link to="#" onClick={() => handleBack("back")}>
                      Already a user?
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccess;
