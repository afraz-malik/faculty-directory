import React from 'react'
import BecomeFacultyCss from './BecomeFaculty.module.scss'

const BecomeFaculty = () => {
  return (
    <div className={BecomeFacultyCss.container}>
      <section className={BecomeFacultyCss.sec1}>
        <div className={BecomeFacultyCss.form}>
          <h1>Sign up to became faculy member</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Name" />
              <button>Sign Up</button>
            </form>
          </p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
          </div>
          <div className={BecomeFacultyCss.button}>
            <button>Become Faculty Now</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BecomeFaculty
