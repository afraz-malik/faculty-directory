import React from 'react'
import LoginCss from './Login.module.scss'
import Navbar from '../Navbar/Navbar'
import { withRouter } from 'react-router-dom'
const LoginBox = ({ children, match }) => {
  return (
    <div className={LoginCss.smallHeader}>
      <div
        className={LoginCss.container}
        style={{ backgroundImage: 'url(images/bg/bg3.jpg)' }}
      >
        <Navbar />
        <div className={LoginCss.site}>
          <a href="#a">Home</a>
          <span>{match.path.substr(1)}</span>
        </div>
        <div className={LoginCss.form}>{children}</div>
      </div>
    </div>
  )
}

export default withRouter(LoginBox)
