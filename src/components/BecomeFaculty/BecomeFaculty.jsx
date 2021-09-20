import React from 'react'
import BecomeFacultyCss from './BecomeFaculty.module.scss'
import { Link } from 'react-router-dom'
const BecomeFaculty = () => {
  return (
    <div className={BecomeFacultyCss.container} id="signup">
      <section className={BecomeFacultyCss.sec1}>
        <div className={BecomeFacultyCss.form}>
          <h1>Sign up to became faculy member</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
          </p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Name" />
            <button>Sign Up</button>
          </form>
        </div>
        <div
          className={BecomeFacultyCss.image}
          style={{ backgroundImage: `url(images/signup-bg.jpg)` }}
        ></div>
      </section>
      <section className={BecomeFacultyCss.sec2}>
        <div className={BecomeFacultyCss.div}>
          <div className={BecomeFacultyCss.section_title}>
            <h2>Join Our Community Now!</h2>
            <p>
              This template is designed by Bc180404438 for University purpose on
              JustinMind. The quick brown fox jums over the lazy dog This
              template is designed by Bc180404438 for University purpose on
              JustinMind
            </p>
          </div>
          <div className={BecomeFacultyCss.button}>
            <Link to="/register">Become Faculty Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BecomeFaculty
