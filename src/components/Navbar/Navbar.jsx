import React, { useState } from 'react'
import NavbarCss from './Navbar.module.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [toggle, settoggle] = useState(true)
  const handleToggle = () => {
    settoggle(!toggle)
  }
  return (
    <nav>
      <div className={NavbarCss.rightnav}>
        <img src="images/profile.png" alt="" />
        <div className={NavbarCss.switch} onClick={() => handleToggle()}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <div
        className={NavbarCss.leftnav}
        style={toggle ? { display: 'block' } : { display: 'none' }}
      >
        <ul>
          <li>
            {' '}
            <a href="#dum" alt="">
              Home{' '}
            </a>
          </li>

          <li>
            {' '}
            <a href="#faculty" alt="">
              Our Faculty{' '}
            </a>
          </li>
          <li>
            {' '}
            <a href="#signup" alt="">
              Become Faculty{' '}
            </a>
          </li>
          <li>
            {' '}
            <Link to="/contact">Contact </Link>
          </li>
          <Link to="/login">
            <li className={NavbarCss.login}>Login</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
