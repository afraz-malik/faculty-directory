import React from 'react'
import LoginFormCss from './LoginForm.module.scss'
import { Link } from 'react-router-dom'
const LoginForm = () => {
  return (
    <div className={LoginFormCss.container}>
      <form>
        <h4>Sign in to Faculty Directory</h4>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#af" alt="">
          Forget password?
        </a>
        <input type="submit" value="Sign in" />
        <p>
          Don't have an account? <Link to="/register"> Sign up</Link>{' '}
        </p>
      </form>
      <div className={LoginFormCss.sociallinks}>
        <p>Sign in with</p>
        <span>
          <div className={LoginFormCss.img}>
            <img src="images/google.svg" alt="" />
          </div>
          <div className={LoginFormCss.img}>
            <img src="images/fb.svg" alt="" />
          </div>
        </span>
      </div>
    </div>
  )
}
export default LoginForm
