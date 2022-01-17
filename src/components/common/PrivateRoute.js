import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/UserAuth'

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  return currentUser ? children : navigate('/')
}

export default PrivateRoute
