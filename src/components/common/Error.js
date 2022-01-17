import React from 'react'
import styles from './styles.module.css'

const Error = ({ message }) => {
  const { error } = styles
  return (
    <div className={error}>{message}</div>
  )
}

export default Error
