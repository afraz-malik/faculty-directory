import React, { useState } from 'react'
import NavbarCss from './Navbar.module.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [toggle, settoggle] = useState(true)
  const handleToggle = () => {
    settoggle(!toggle)
  }
  // window.addEventListener('resize', function () {
  //   if (window.matchMedia('(min-width: 768px)').matches) {
  //     settoggle(true)
  //   } else {
  //     settoggle(false)
  //   }
  // })
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
          <li>
            <Link to="/login" className={NavbarCss.login}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
