import React from 'react'
import styles from "./detail.module.css";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

const UserProfileDetail = () => {
  const {
    container,
    card,
    box,
    content,
    wrapper,
    section,
    row
  } = styles
  return (
    <div className={wrapper}>
      <div className={section}>
        <div className={container}>
      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h2>Profile Details</h2>
            <h3>Card One</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h2>02</h2>
            <h3>Card Two</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>
  )
}

export default UserProfileDetail
