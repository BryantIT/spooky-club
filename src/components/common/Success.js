import React from "react";
import styles from "./styles.module.css";

const Success = ({ message }) => {
  const { success } = styles;
  return <div className={success}>{message}</div>;
};

export default Success;
