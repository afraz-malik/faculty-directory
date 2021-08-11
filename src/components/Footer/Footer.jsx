import React from 'react'
import FooterCss from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={FooterCss.footer}>
      <div className={FooterCss.top}>
        <div className={FooterCss.warp}>
          <div className={FooterCss.row}>
            <div className={FooterCss.widget_item}>
              <h4>Contact Info</h4>
              <ul className={FooterCss.contact_list}>
                <li>
                  1481 Creekside Lane <br />
                  Avila Beach, CA 931
                </li>
                <li>+53 345 7953 32453</li>
                <li>yourmail@gmail.com</li>
              </ul>
            </div>
            <div className={FooterCss.widget_item}>
              <h4>Engeneering</h4>
              <ul>
                <li>
                  <a href="#aaaaf">Applied Studies</a>
                </li>
                <li>
                  <a href="#aaaaf">Computer Engeneering</a>
                </li>
                <li>
                  <a href="#aaaaf">Software Engeneering</a>
                </li>
                <li>
                  <a href="#aaaaf">Informational Engeneering</a>
                </li>
                <li>
                  <a href="#aaaaf">System Engeneering</a>
                </li>
              </ul>
            </div>
            <div className={FooterCss.widget_item}>
              <h4>Graphic Design</h4>
              <ul>
                <li>
                  <a href="#aaaaf">Applied Studies</a>
                </li>
                <li>
                  <a href="#aaaaf">Computer Engeneering</a>
                </li>
                <li>
                  <a href="#aaaaf">Software Engeneering</a>
                </li>
                <li>
                  <a href="#aaaaf">Informational Engeneering</a>
                </li>
                <li>
                  <a href="#aaaaf">System Engeneering</a>
                </li>
              </ul>
            </div>
            <div className={FooterCss.widget_item}>
              <h4>Development</h4>
              <ul>
                <li>
                  <a href="#aaaaf">Applied Studies</a>
                </li>
                <li>
                  <a href="#aaaaf">Computer Engeneering</a>
                </li>
                <li>
                  <a href="#aaaaf">Software Engeneering</a>
                </li>
                <li>
                  <a href="#aaaaf">Informational Engeneering</a>
                </li>
                <li>
                  <a href="#aaaaf">System Engeneering</a>
                </li>
              </ul>
            </div>
            <div className={FooterCss.widget_item}>
              <h4>Newsletter</h4>
              <form className={FooterCss.newslatter}>
                <input type="email" placeholder="E_mail" />
                <button className={FooterCss.site_btn}>Subscribe</button>
                <p>*We don’t spam</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={FooterCss.bottom}>
        <div className={FooterCss.warp}>
          <div className={FooterCss.copyright}>
            Copyright ©{new Date().getFullYear()}
            All rights reserved | This template is made with by{' '}
            <a href="haaattps://colorlib.com" target="_blank" rel="noreferrer">
              Colorlib
            </a>
          </div>

          <ul className={FooterCss.menu}>
            <li>
              <a href="#aaa">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#aaa">Register</a>
            </li>
            <li>
              <a href="#aaa">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
