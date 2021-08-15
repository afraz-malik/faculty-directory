import React from 'react'
import SmallHeaderCss from './SmallHeader.module.scss'
import Navbar from '../Navbar/Navbar'
const SmallHeader = () => {
  return (
    <div className={SmallHeaderCss.smallHeader}>
      <div
        className={SmallHeaderCss.container}
        style={{ backgroundImage: 'url(images/bg/bg3.jpg)' }}
      >
        <Navbar />
        <div className={SmallHeaderCss.site}>
          <a href="#a">Home</a>
          <span>Contact</span>
        </div>
      </div>
      <section class={SmallHeaderCss.section}>
        <div class={SmallHeaderCss.container}>
          <div class={SmallHeaderCss.warp}>
            <div class={SmallHeaderCss.title}>
              <h2>
                <span>Search your course</span>
              </h2>
            </div>
            <div class={SmallHeaderCss.row}>
              <div class={SmallHeaderCss.col}>
                <form class="course-search-form">
                  <input type="text" placeholder="Course" />
                  <input type="text" class="last-m" placeholder="Category" />
                  <button class="site-btn btn-dark">Search Couse</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SmallHeader
