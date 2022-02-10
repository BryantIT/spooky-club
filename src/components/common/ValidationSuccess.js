import React from "react";
import styles from "./styles.module.css";

const ValidationSuccess = ({ message }) => {
  const { success } = styles;
  const { characterMin } = message;
  return <div className={success}>{characterMin}</div>;
};

export default ValidationSuccess;
