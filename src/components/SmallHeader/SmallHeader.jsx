import React from 'react'
import SmallHeaderCss from './SmallHeader.module.scss'
import Navbar from '../Navbar/Navbar'
import { Link, withRouter } from 'react-router-dom'
const SmallHeader = ({ bg, section, location }) => {
  var loc = location.pathname
  var start = loc.indexOf('/')
  var end = loc.lastIndexOf('/')
  var nloc1 = loc.substr(start + 1, end - 1)
  var nloc2 = loc.substr(end + 1)

  const [state, setstate] = React.useState({
    course: '',
    university: '',
  })
  return (
    <div className={SmallHeaderCss.smallHeader}>
      <div
        className={SmallHeaderCss.container}
        // style={{backgroundImage: `url`}}
        style={{
          backgroundImage: `url(images/bg/${bg}.jpg)`,
          height: !section ? '300px' : '443px',
        }}
      >
        <Navbar />
        <div className={SmallHeaderCss.site}>
          <Link to="/">Home</Link>
          {nloc1 === '' ? (
            <span>{nloc2}</span>
          ) : (
            <>
              <Link to={'/' + nloc1}>{nloc1}</Link>
              <span>{nloc2}</span>
            </>
          )}{' '}
        </div>
      </div>
      {section ? (
        <section className={SmallHeaderCss.section}>
          <div className={SmallHeaderCss.seccontainer}>
            <div className={SmallHeaderCss.warp}>
              <div className={SmallHeaderCss.title}>
                <h2>
                  <span>Search your faculty</span>
                </h2>
              </div>
              <div className={SmallHeaderCss.row}>
                <div className={SmallHeaderCss.col}>
                  <form className="course-search-form">
                    <input
                      type="text"
                      placeholder="Course"
                      onChange={(e) =>
                        setstate({ ...state, course: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="University"
                      onChange={(e) =>
                        setstate({ ...state, university: e.target.value })
                      }
                    />
                    <Link
                      to={{
                        pathname: `/faculty`,
                        university: state.university,
                        course: state.course,
                      }}
                    >
                      Search Couse
                    </Link>
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
