import React from 'react'
import SmallHeaderCss from './SmallHeader.module.scss'
import Navbar from '../Navbar/Navbar'
import { Link, withRouter } from 'react-router-dom'
const SmallHeader = ({ bg, section, location }) => {
  return (
    <div className={SmallHeaderCss.smallHeader}>
      <div
        className={SmallHeaderCss.container}
        // style={{backgroundImage: `url`}}
        style={{ backgroundImage: `url(images/bg/${bg}.jpg)` }}
      >
        <Navbar />
        <div className={SmallHeaderCss.site}>
          <Link to="/">Home</Link>
          <span>{location.pathname.substr(1)}</span>
        </div>
      </div>
      {section ? (
        <section className={SmallHeaderCss.section}>
          <div className={SmallHeaderCss.seccontainer}>
            <div className={SmallHeaderCss.warp}>
              <div className={SmallHeaderCss.title}>
                <h2>
                  <span>Search your course</span>
                </h2>
              </div>
              <div className={SmallHeaderCss.row}>
                <div className={SmallHeaderCss.col}>
                  <form className="course-search-form">
                    <input type="text" placeholder="Course" />
                    <input
                      type="text"
                      className="last-m"
                      placeholder="Category"
                    />
                    <button className="site-btn btn-dark">Search Couse</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}

export default withRouter(SmallHeader)
