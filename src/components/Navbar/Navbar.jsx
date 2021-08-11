import React from 'react'
import NavbarCss from './Navbar.module.scss'
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
            <a href="#dum" alt="">
              Our Faculty{' '}
            </a>
          </li>
          <li>
            {' '}
            <a href="#dum" alt="">
              About Us{' '}
            </a>
          </li>
          <li>
            {' '}
            <a href="#dum" alt="">
              Contact{' '}
            </a>
          </li>
          <li className={NavbarCss.login}>
            {' '}
            <a href="#dum" alt="">
              Login{' '}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
