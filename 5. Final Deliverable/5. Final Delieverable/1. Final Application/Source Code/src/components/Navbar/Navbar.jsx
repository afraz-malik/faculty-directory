import React, { useState } from 'react'
import NavbarCss from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutStart } from '../../redux/user/user.action'

const Navbar = () => {
  const currentUser = useSelector((state) => state.userReducer.currentUser)

  const dispatch = useDispatch()
  const [toggle, settoggle] = useState(false)
  const [profile, setprofile] = useState(false)

  const handleToggle = () => {
    settoggle(!toggle)
  }

  return (
    <nav>
      <div className={NavbarCss.rightnav}>
        <Link to="/">
          <img src="images/profile.png" alt="" />
        </Link>
        <div className={NavbarCss.switch} onClick={() => handleToggle()}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <div
        className={NavbarCss.leftnav1}
        style={toggle ? { display: 'block' } : { display: 'none' }}
      >
        <ul>
          <li>
            {' '}
            <Link to="/">Home </Link>
          </li>

          <li>
            {' '}
            <Link to="/contact">Contact </Link>
          </li>
          <li>
            {' '}
            <Link to="/faculty">Our Faculty </Link>
          </li>
          <li>
            {' '}
            <Link to="/register">Become Faculty </Link>
          </li>
          {!currentUser ? (
            <li>
              <Link to="/login" className={NavbarCss.login}>
                Login
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/login" onClick={() => dispatch(signOutStart())}>
                Logout
              </Link>
              {/* <div className={NavbarCss.dropdown}>
                <div
                  className={NavbarCss.a}
                  onClick={() => dispatch(signOutStart())}
                >
                  {' '}
                  Log out
                </div>
                Welcome
                <Link to="/login" className={NavbarCss.login}>
                  {currentUser.displayName}!
                </Link>
                <div className={NavbarCss.dropdownContent}></div>
              </div> */}
            </li>
          )}
        </ul>
      </div>

      <div
        className={NavbarCss.leftnav}
        style={toggle ? { display: 'none' } : null}
      >
        <ul>
          <li>
            {' '}
            <Link to="/">Home </Link>
          </li>

          <li>
            {' '}
            <Link to="/contact">Contact </Link>
          </li>
          <li>
            {' '}
            <Link to="/faculty">Our Faculty </Link>
          </li>
          <li>
            {' '}
            <Link to="/register">Become Faculty </Link>
          </li>
          {!currentUser ? (
            <li>
              <Link to="/login" className={NavbarCss.login}>
                Login
              </Link>
            </li>
          ) : (
            <li>
              <div className={NavbarCss.dropdown}>
                <div className={NavbarCss.profile}>
                  <img
                    src="images/authors/19.png"
                    alt=""
                    onClick={() => setprofile(!profile)}
                  />
                </div>
                <div
                  className={NavbarCss.dropdownContent}
                  style={{ display: profile ? 'block' : 'none' }}
                >
                  <Link to="/dashboard" className={NavbarCss.a}>
                    {' '}
                    Dashboard
                  </Link>
                  <div
                    className={NavbarCss.a}
                    onClick={() => dispatch(signOutStart())}
                  >
                    {' '}
                    Log out
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
