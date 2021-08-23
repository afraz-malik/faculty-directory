import React from 'react'
import { Link } from 'react-router-dom'
import SignupCss from './SignupForm.module.scss'
const SignupForm = () => {
  return (
    <div className={SignupCss.container}>
      <form>
        <h4>Become Faculty Member</h4>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="email" placeholder="University you are teaching in" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
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
