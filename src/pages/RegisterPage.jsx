import React, { useEffect } from 'react'
import LoginBox from '../components/LoginBoxModel/Login'
import SignupForm from '../components/SignupForm/SignupForm'
const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <LoginBox>
      <SignupForm />
    </LoginBox>
  )
}

export default RegisterPage
