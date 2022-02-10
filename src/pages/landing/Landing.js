import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Landing = () => {
  const { intro, introContent, row, colTwelve, btn, shadowOverlay } = styles;
  return (
    <section className={intro}>
      <div className={shadowOverlay} />
      <div className={introContent}>
        <div className={row}>
          <div className={colTwelve}>
            <h5>Hello and welcome to</h5>
            <h1>The Myst and Orb Society</h1>
            <Link className={btn} to="/about">
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
