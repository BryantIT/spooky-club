import React from 'react'
import styles from './styles.module.css'

const Info = ({ message }) => {
  const { info } = styles
  return (
    <div className={info}>{message}</div>
  )
}

export default Info
