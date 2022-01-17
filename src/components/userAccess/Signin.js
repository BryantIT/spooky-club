import React, { useState, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const Signin = () => {
  // Common
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  // States
  const [useEmailSignin, setUseEmailSignin] = useState(false);
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });
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
  } = styles;

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  const handleEmailSignin = () => {
    setUseEmailSignin(!useEmailSignin);
  };

  const handleGoogleSingin = () => {
    console.log("here");
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSigninData({
      ...signinData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isReady = false;
  };

  return (
    <div className={row}>
      <div className={formWrapper}>
        <div className={formContainer}>
          <div className={titleContainer}>
            <h2>Signin Form</h2>
          </div>
          <div className={rows}>
            <div className="">
              {useEmailSignin ? (
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
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input className={button} type="submit" value="Register" />
                  <div className={buttonWrapper}>
                    <button className={button} onClick={handleEmailSignin}>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className={buttonWrapper}>
                  <button className={button} onClick={handleEmailSignin}>
                    Email
                  </button>
                  <button className={button} onClick={handleGoogleSingin}>
                    Google
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
