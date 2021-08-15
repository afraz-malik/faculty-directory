import React from 'react'
import NavbarCss from './Navbar.module.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className={NavbarCss.rightnav}>
        <img src="/images/cover.png" alt="" />
      </div>
      <div className={NavbarCss.leftnav}>
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
