import React from 'react'
import FooterCss from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={FooterCss.footer}>
      <div className={FooterCss.row} id="about">
        <div className={FooterCss.widget_item}>
          <h4>Contact Info</h4>
          <ul className={FooterCss.contact_list}>
            <li>
              49-A Shad Bagh <br />
              Lahore, Pakistan
            </li>
            <li>+92 335 1699312</li>
            <li>facultydirectory@gmail.com</li>
          </ul>
        </div>
        <div className={FooterCss.widget_item}>
          <h4>Engeneering</h4>
          <ul>
            <li>
              <span>Applied Studies</span>
            </li>
            <li>
              <span>Computer Engeneering</span>
            </li>
            <li>
              <span>Software Engeneering</span>
            </li>
            <li>
              <span>Informational Engeneering</span>
            </li>
            <li>
              <span>System Engeneering</span>
            </li>
          </ul>
        </div>
        <div className={FooterCss.widget_item}>
          <h4>Graphic Design</h4>
          <ul>
            <li>
              <span>Applied Studies</span>
            </li>
            <li>
              <span>Computer Engeneering</span>
            </li>
            <li>
              <span>Software Engeneering</span>
            </li>
            <li>
              <span>Informational Engeneering</span>
            </li>
            <li>
              <span>System Engeneering</span>
            </li>
          </ul>
        </div>
        <div className={FooterCss.widget_item}>
          <h4>Development</h4>
          <ul>
            <li>
              <span>Applied Studies</span>
            </li>
            <li>
              <span>Computer Engeneering</span>
            </li>
            <li>
              <span>Software Engeneering</span>
            </li>
            <li>
              <span>Informational Engeneering</span>
            </li>
            <li>
              <span>System Engeneering</span>
            </li>
          </ul>
        </div>
        <div className={FooterCss.widget_item}>
          <h4>Newsletter</h4>
          <form
            className={FooterCss.newslatter}
            onSubmit={() => alert('submitted')}
          >
            <input type="email" placeholder="E_mail" />
            <button className={FooterCss.site_btn}>Subscribe</button>
            <p>*We don’t spam</p>
          </form>
        </div>
      </div>

      <div className={FooterCss.bottom}>
        <div className={FooterCss.warp}>
          <div className={FooterCss.copyright}>
            Copyright ©{new Date().getFullYear()}| All rights reserved | This
            website is made with by &#9825; by &ensp;
            <a
              href="https://afraz-malik.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Afraz Malik
            </a>
          </div>

          <ul className={FooterCss.menu}>
            <li>
              {/* eslint-disable-next-line */}
              <a>Terms &amp; Conditions</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a>Register</a>
            </li>

            <li>
              {/* eslint-disable-next-line */}
              <a>Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
