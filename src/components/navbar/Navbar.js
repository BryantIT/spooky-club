import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/UserAuth";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  // Common
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  // States
  const [checkActive, setCheckActive] = useState(false);
  // Styles
  const { menuBtn, close, wrapper, active } = styles;

  const handleMenuClick = () => {
    setCheckActive(!checkActive);
  };
  return (
    <Fragment>
      <input
        type="checkbox"
        id={active}
        checked={checkActive}
        onClick={handleMenuClick}
        readOnly
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
            {!currentUser ? (
              <Link to="/signup" onClick={handleMenuClick}>
                Register/Signin
              </Link>
            ) : (
              <Link to="/logout" onClick={handleMenuClick}>
                Signout
              </Link>
            )}
          </li>
          <li>
            {currentUser ? (
              <Link to="/profile" onClick={handleMenuClick}>
                Profile
              </Link>
            ) : null}
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
