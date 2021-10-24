import React from 'react'
import ContactCss from './Contact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../../redux/data/data.actions'
import { Loading } from '../../redux/data/data.selectors'
import { Spinner } from '../spinner/spinner'
const Contact = () => {
  const dispatch = useDispatch()
  const loading = useSelector((s) => Loading(s))
  const [state, setstate] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(sendMessage(state))
    setstate({ name: '', email: '', subject: '', message: '' })
  }
  return (
    <section className={ContactCss.section}>
      <div className={ContactCss.container} id="contact">
        <div className={ContactCss.row}>
          <div className={ContactCss.col1}>
            <div className={ContactCss.contact_warp}>
              <div className={ContactCss.title}>
                <h2>Get in Touch</h2>
                <p>
                  This template is designed by Bc180404438 for University
                  purpose on JustinMind. The quick brown fox jums over the lazy
                  dog This template is designed by Bc180404438 for University
                  purpose on JustinMind
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={state.name}
                  required
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  name="email"
                  value={state.email}
                  required
                  onChange={handleChange}
                  placeholder="Your E-mail"
                />
                <input
                  type="text"
                  value={state.subject}
                  name="subject"
                  required
                  onChange={handleChange}
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  value={state.message}
                  required
                  onChange={handleChange}
                  placeholder="Message"
                ></textarea>
                <button type="submit" className={ContactCss.site}>
                  Sent Message
                </button>
              </form>
            </div>
          </div>
          <div className={ContactCss.col2}>
            <div className={ContactCss.contact_warp}>
              <div className={ContactCss.title}>
                <h2>Contact Info</h2>
                <p>
                  This template is designed by Bc180404438 for University
                  purpose on JustinMind. The quick brown fox jums over the lazy
                  dog.
                </p>
              </div>
              <div className={ContactCss.phone}>
                <span>Direct Line</span>
                <h2>+92 335 1699312</h2>
              </div>
              <ul className={ContactCss.contact}>
                <li>
                  49-A Shad Bagh <br />
                  Lahore, Pakistan
                </li>
                <li>+92 335 1699312</li>
                <li>facultydirectory@gmail.com</li>
              </ul>
              <div className={ContactCss.social}>
                <a href="#af">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#af">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#af">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#af">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#af">
                  <i className={ContactCss.fa}></i>
                </a>
                <a href="#af">
                  <i className={ContactCss.fa}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? <Spinner /> : null}
    </section>
  )
}

export default Contact
