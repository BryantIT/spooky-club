import React, { useEffect } from 'react'
import { useAuth } from '../../auth/UserAuth'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  const { signout } = useAuth()

  useEffect(() => {
    signout()
    navigate('/')
  }, [])
  return (
    null
  )
}

export default Logout
