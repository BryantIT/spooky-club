import React, { Fragment } from "react";
import styles from './construction.module.css'
import siteLogo from "../../images/sitelogo.png"

const UnderConstruction = () => {
  const {
    object,
    objectRope,
    soon,
    content,
    message,
    mailtoaddress,
    ghost,
    ghostDimples,
    ghostEyes,
    ghostFeet,
    ghostFoot,
    test,
    logo,
    logoWrapper
   } = styles
  return (
    <Fragment>
      <div className={logoWrapper}>
        <div className={logo}><b>4<span>0</span><span>4</span></b></div>
      </div>
      <div className={content}>
        <div className={ghost}>
          <div className={ghostEyes}></div>
        <div className={ghostDimples}></div>
      <div className={ghostFeet}>
        <div className={ghostFoot}></div>
        <div className={ghostFoot}></div>
        <div className={ghostFoot}></div>
        <div className={ghostFoot}></div>
      </div>
          </div>

      <p className={message}>
          Our website is still a work in progress.  If you feel like this page should be here, please email us and let us know.  Otherwise be sure to follow us on your favorite social media app for updates to new features.
        </p>

        <p className={mailtoaddress}>
          <em>investigator@mystandorbsociety.com</em>
        </p>
      </div>
    </Fragment>
  );
};

export default UnderConstruction;
