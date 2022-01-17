import React, { Fragment } from 'react'
import styles from './styles.module.css'

const Validation = ({ message }) => {
  const { warning } = styles
  const { characterMin } = message
  return (
    <Fragment>
      {
        characterMin ? <div className={warning}>{characterMin}</div> : null
      }
    </Fragment>
  )
}

export default Validation
