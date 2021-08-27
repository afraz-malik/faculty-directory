import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signUp } from '../../redux/user/user.action'
import SignupCss from './SignupForm.module.scss'
const SignupForm = () => {
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
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="university"
          placeholder="University you are teaching in"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="cpassword"
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
    </div>
  )
}
export default SignupForm
