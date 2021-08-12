import React from 'react'
import ContactCss from './ContactCss.module.scss'

const ContactUs = () => {
  return (
    <section className={ContactCss.section}>
      <div className={ContactCss.container}>
        <div className={ContactCss.row}>
          <div className={ContactCss.col1}>
            <div className={ContactCss.contact_warp}>
              <div className={ContactCss.title}>
                <h2>Get in Touch</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  malesuada lorem maximus mauris scelerisque, at rutrum nulla
                  dictum. Ut ac ligula sapien.{' '}
                </p>
              </div>
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your E-mail" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button className={ContactCss.site}>Sent Message</button>
              </form>
            </div>
          </div>
          <div className={ContactCss.col2}>
            <div className={ContactCss.contact_warp}>
              <div className={ContactCss.title}>
                <h2>Contact Info</h2>
                <p>
                  Donec malesuada lorem maximus mauris scelerisque, at rutrum
                  nulla dictum. Ut ac ligula sapien. Suspendi sse cursus
                  faucibus finibus.
                </p>
              </div>
              <div className={ContactCss.phone}>
                <span>Direct Line</span>
                <h2>+53 345 7953 32453</h2>
              </div>
              <ul className={ContactCss.contact}>
                <li>
                  1481 Creekside Lane <br />
                  Avila Beach, CA 931
                </li>
                <li>+53 345 7953 32453</li>
                <li>yourmail@gmail.com</li>
              </ul>
              <div className={ContactCss.social}>
                <a href="#">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#">
                  <i className={ContactCss.fa}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
