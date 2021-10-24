import React from 'react'
import LoginFormCss from './LoginForm.module.scss'
import { Link, withRouter } from 'react-router-dom'
import {
  forgetPassword,
  signInWithEmailStart,
  signInWithGoogleStart,
} from '../../redux/user/user.action'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../../redux/user/user.selector'
import { Spinner } from '../spinner/spinner'

const LoginForm = () => {
  const loading = useSelector((s) => Loading(s))
  const dispatch = useDispatch()
  const [state, setstate] = React.useState({ email: '', password: '' })
  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(signInWithEmailStart(state))
    setstate({ ...state, password: '' })
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
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={state.password}
        />

        <div
          className={LoginFormCss.a}
          onClick={() => {
            const email = prompt('Enter Email')
            dispatch(forgetPassword(email))
          }}
        >
          Forget password?
        </div>
        <input type="submit" value="Sign in" />
        <p>
          Don't have an account? <Link to="/register"> Sign up</Link>{' '}
        </p>
      </form>
      <div className={LoginFormCss.sociallinks}>
        <p>Sign in with</p>
        <span>
          <div className={LoginFormCss.img} style={{ display: 'none' }}>
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
      {loading ? <Spinner /> : null}
    </div>
  )
}
export default withRouter(LoginForm)
