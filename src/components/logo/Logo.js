import React from "react"
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  const { logo } = styles
  return (
    <div className={logo}>
      <Link to='/'></Link>
    </div>
  )
}

export default Logo
