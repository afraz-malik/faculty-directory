import React from 'react'
import LoginCss from './Login.module.scss'
import Navbar from '../Navbar/Navbar'
const LoginBox = ({ children }) => {
  return (
    <div className={LoginCss.smallHeader}>
      <div
        className={LoginCss.container}
        style={{ backgroundImage: 'url(images/bg/bg3.jpg)' }}
      >
        <Navbar />
        <div className={LoginCss.site}>
          <a href="#a">Home</a>
          <span>Contact</span>
        </div>
        <div className={LoginCss.form}>{children}</div>
      </div>
    </div>
  )
}

export default LoginBox
