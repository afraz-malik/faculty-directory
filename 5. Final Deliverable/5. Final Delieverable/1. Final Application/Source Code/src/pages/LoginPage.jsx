import React, { useEffect } from 'react'
import LoginBox from '../components/LoginBoxModel/Login'
import LoginForm from '../components/LoginForm/LoginForm'
const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <LoginBox>
      <LoginForm />
    </LoginBox>
  )
}

export default LoginPage
