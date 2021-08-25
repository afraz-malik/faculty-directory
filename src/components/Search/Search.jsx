import React from 'react'
import SearchCss from './Search.module.scss'
import { useSelector } from 'react-redux'

import { filter } from 'smart-array-filter'
import FacultyCard from '../FacultyCard/FacultyCard'

const Search = () => {
  const faculty = useSelector((state) => state.FacultyReducer.faculty)
  const [active, setactive] = React.useState({
    key: false,
    uni: false,
    dept: false,
    course: false,
    pi: false,
    area: false,
    filter: false,
  })
  var filteredData
  const data = filter(faculty, {
    // limit: 1,
    keywords: 'Software Enginererin',
    caseSensitive: false,
  })
  filteredData = data

  const handleFocus = (e) => {
    setactive({
      key: false,
      uni: false,
      dept: false,
      course: false,
      pi: false,
      area: false,
    })
    setactive({
      ...active,
      [e.target.id]: true,
    })
  }
  const clearFocus = (e) => {
    if (e.target.value === '') {
      setactive({ ...active, [e.target.id]: false })
    }
  }
  return (
    <>
      <div className={SearchCss.container} id="search">
        <h2>Search your Faculty Member</h2>
        <div className={SearchCss.inside}>
          <div className={SearchCss.col}>
            <div className={SearchCss.row}>
              <input
                type="text"
                id="key"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
              <label
                className={active.key ? SearchCss.active : null}
                htmlFor="key"
              >
                Search by Keyword
              </label>
              <button
                className={SearchCss.filterbtn}
                onClick={() => setactive({ ...active, filter: !active.filter })}
              >
                {' '}
                Filters{' '}
              </button>
            </div>
          </div>
          <div
            className={SearchCss.col}
            style={{ display: active.filter ? 'flex' : 'none' }}
          >
            <div className={SearchCss.row}>
              <label
                className={active.uni ? SearchCss.active : null}
                htmlFor="uni"
              >
                University
              </label>
              <input
                id="uni"
                type="text"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
            </div>

            <div className={SearchCss.row}>
              <label
                className={active.dept ? SearchCss.active : null}
                htmlFor="dept"
              >
                Department
              </label>
              <input
                id="dept"
                type="text"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
            </div>
          </div>
          <div
            className={SearchCss.col}
            style={{ display: active.filter ? 'flex' : 'none' }}
          >
            <div className={SearchCss.row}>
              <label
                className={active.course ? SearchCss.active : null}
                htmlFor="course"
              >
                Courses
              </label>
              <input
                id="course"
                type="text"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
            </div>
            <div className={SearchCss.row}>
              <label className={active.area ? SearchCss.active : null}>
                Area of Experties
              </label>
              <input
                id="area"
                type="text"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
            </div>
          </div>
          <div
            className={SearchCss.col}
            style={{ display: active.filter ? 'flex' : 'none' }}
          >
            <div className={SearchCss.row}>
              <label
                className={active.pi ? SearchCss.active : null}
                htmlFor="pi"
              >
                Professional Interests
              </label>
              <input
                id="pi"
                type="text"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={SearchCss.cards}>
        {filteredData.map((el, i) => (
          <FacultyCard key={i} el={el} />
        ))}
      </div>
    </>
  )
}

export default Search
