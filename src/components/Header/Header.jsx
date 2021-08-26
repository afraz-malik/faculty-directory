import React from 'react'
import HeaderCss from './Header.module.scss'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  const [state, setstate] = React.useState({
    course: '',
    university: '',
  })
  return (
    <div
      className={HeaderCss.header}
      style={{
        backgroundImage: `url('images/bg/bg.jpg')`,
      }}
    >
      <Navbar />
      <div className={HeaderCss.body}>
        <div className={HeaderCss.title}>
          <h3>Get The Best Faculty From World</h3>
          <p>
            This template is designed by Bc180404438 for University purpose on
            JustinMind. The quick brown fox jums over the lazy dog This template
            is designed by Bc180404438 for University purpose on JustinMind
          </p>
        </div>
        <div className={HeaderCss.input}>
          <input
            type="text"
            placeholder="Course"
            value={state.course}
            onChange={(e) => setstate({ ...state, course: e.target.value })}
          />
          <input
            type="text"
            placeholder="University"
            value={state.university}
            onChange={(e) => setstate({ ...state, university: e.target.value })}
          />
          <Link to={`/faculty?${state.course}#${state.university}`}>
            {' '}
            Search Faculty
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
