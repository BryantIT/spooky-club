import React from 'react'
import styles from './styles.module.css'

const Warning = ({ message }) => {
  const { warning } = styles
  return (
    <div className={wanring}>{message}</div>
  )
}

export default Warning
