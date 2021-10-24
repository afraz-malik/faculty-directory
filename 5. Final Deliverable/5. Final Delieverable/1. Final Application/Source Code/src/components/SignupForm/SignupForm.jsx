import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signUp } from '../../redux/user/user.action'
import SignupCss from './SignupForm.module.scss'
import { Loading } from '../../redux/user/user.selector'
import { Spinner } from '../spinner/spinner'
const SignupForm = () => {
  const loading = useSelector((s) => Loading(s))

  const dispatch = useDispatch()
  const [state, setstate] = React.useState({
    name: '',
    email: '',
    university: '',
    password: '',
    cpassword: '',
  })
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (state.password === state.cpassword) {
      dispatch(signUp(state))
      setstate({ ...state, password: '', cpassword: '' })
    } else {
      alert('Password not matched')
    }
  }
  return (
    <div className={SignupCss.container}>
      <form onSubmit={handleSubmit}>
        <h4>Become Faculty Member</h4>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={state.name}
        />
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={state.university}
          name="university"
          placeholder="University you are teaching in"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={state.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="cpassword"
          value={state.cpassword}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <div className={SignupCss.check}>
          <input type="checkbox" />
          <label>
            By signing up, I agree to Faculty Directory's{' '}
            <span>Terms of Services</span>
          </label>
        </div>
        <input type="submit" value="Continue" />
        <p>
          Already have an account? <Link to="/login">Sign in </Link>
        </p>
      </form>
      <div className={SignupCss.sociallinks}>
        <p>Sign in with</p>
        <span>
          <div className={SignupCss.img}>
            <img src="images/google.svg" alt="" />
          </div>
          <div className={SignupCss.img}>
            <img src="images/fb.svg" alt="" />
          </div>
        </span>
      </div>
      {loading ? <Spinner /> : null}
    </div>
  )
}
export default SignupForm
