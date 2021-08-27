import React from 'react'
import LoginFormCss from './LoginForm.module.scss'
import { Link, withRouter } from 'react-router-dom'
import {
  signInWithEmailStart,
  signInWithGoogleStart,
} from '../../redux/user/user.action'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [state, setstate] = React.useState({ email: '', password: '' })
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(signInWithEmailStart(state))
  }
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value })
  }
  const handleGoogle = () => {
    dispatch(signInWithGoogleStart())
  }
  return (
    <div className={LoginFormCss.container}>
      <form onSubmit={handleSubmit}>
        <h4>Sign in to Faculty Directory</h4>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

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
            <img
              src="images/google.svg"
              alt=""
              onClick={() => handleGoogle()}
            />
          </div>
          <div className={LoginFormCss.img}>
            <img src="images/fb.svg" alt="" />
          </div>
        </span>
      </div>
    </div>
  )
}
export default withRouter(LoginForm)
