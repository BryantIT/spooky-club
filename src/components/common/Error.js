import React from 'react'
import styles from './styles.module.css'

const Error = ({ message }) => {
  const { error } = styles
  console.log('what is message', message)
  return (
    <div className={error}>{message}</div>
  )
}

export default Error
