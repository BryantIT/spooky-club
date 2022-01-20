import React, { useState, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Components
// Firebase
import { useAuth } from "../../auth/UserAuth";
// Styles
import styles from "./styles.module.css";

const ButtonSwitch = ({ handleSelection }) => {
  // Common
  const { signup, googleSignup, currentUser } = useAuth();
  const navigate = useNavigate();
  // States
  // Styles
  const {
    formWrapper,
    row,
    formContainer,
    rows,
    buttonWrapper,
    button,
  } = styles;

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  return (
    <div className={row}>
      <div className={formWrapper}>
        <div className={formContainer}>
          <div className={rows}>
            <div className="">
              <div className={buttonWrapper}>
                <button
                  className={button}
                  onClick={() => handleSelection("signin")}
                >
                  Sign In
                </button>
                <button
                  className={button}
                  onClick={() => handleSelection("signup")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonSwitch;
