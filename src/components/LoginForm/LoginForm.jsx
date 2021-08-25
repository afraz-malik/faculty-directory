import React from 'react'
import LoginFormCss from './LoginForm.module.scss'
import { Link, withRouter } from 'react-router-dom'
import { isAdmin } from '../../redux/action'
import { useDispatch } from 'react-redux'

const LoginForm = ({ history }) => {
  const dispatch = useDispatch()
  const [admin, setadmin] = React.useState(false)
  const handleSubmit = () => {
    dispatch(isAdmin(admin))
    history.push('/dashboard')
  }
  return (
    <div className={LoginFormCss.container}>
      <form>
        <h4>Sign in to Faculty Directory</h4>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div>
          <input
            type="checkbox"
            checked={admin}
            onChange={() => setadmin(!admin)}
          />{' '}
          <span style={{ fontSize: '13px' }}>Login as Admin</span>
        </div>
        <a href="#af" alt="">
          Forget password?
        </a>
        <input type="submit" value="Sign in" onClick={() => handleSubmit()} />
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
export default withRouter(LoginForm)
