import React from 'react'
import HeaderCss from './Header.module.scss'
import Navbar from '../Navbar/Navbar'
const Header = () => {
  return (
    <div className={HeaderCss.header}>
      <Navbar />
      <div className={HeaderCss.body}>
        <div className={HeaderCss.title}>
          <h3>Get The Best Faculty From World</h3>
          <p>
            This template is designed by Bc180404438 for University purpose on
            JustinMind. The quick brown fox jums over the lazy dog This template
            is designed by Bc180404438 for University purpose on JustinMind
          </p>
        </div>
        <div className={HeaderCss.input}>
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="University" />
          <button> Search Faculty</button>
        </div>
      </div>
    </div>
  )
}

export default Header
