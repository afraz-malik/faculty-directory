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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  malesuada lorem maximus mauris scelerisque, at rutrum nulla
                  dictum. Ut ac ligula sapien.{' '}
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
