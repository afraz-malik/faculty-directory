import React from 'react'
import SearchCss from './Search.module.scss'
import { useSelector } from 'react-redux'
import {
  getUniversities,
  getDepartments,
  getCourses,
  getExperties,
} from '../../redux/selector'

import { filter } from 'smart-array-filter'
import FacultyCard from '../FacultyCard/FacultyCard'
import { withRouter } from 'react-router-dom'

const Search = ({ location }) => {
  const faculty = useSelector((state) => state.FacultyReducer.faculty)
  const universities = useSelector((state) => getUniversities(state)).sort()
  const departments = useSelector((state) => getDepartments(state)).sort()
  const courses = useSelector((state) => getCourses(state)).sort()
  const experties = useSelector((state) => getExperties(state)).sort()
  const [active, setactive] = React.useState({
    keyword: false,
    university: false,
    department: false,
    course: false,
    professional: false,
    experty: false,
    filter: false,
  })
  const [state, setstate] = React.useState({
    university: '',
    keyword: '',
    department: '',
    course: '',
    experty: '',
    professional: '',
  })
  React.useEffect(() => {
    if (location.hash || location.search) {
      setstate({
        ...state,
        university: location.hash ? location.hash.slice(1) : '',
        course: location.search ? location.search.slice(1) : '',
      })
      setactive({
        ...active,
        university: location.hash ? true : '',
        course: location.search ? true : '',
        filter: true,
      })
    }
    // eslint-disable-next-line
  }, [])
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value })
  }
  const handleClear = (event) => {
    setstate({ ...state, [event.target.id]: '' })
    setactive({ ...active, [event.target.id]: false })
  }
  const clearFocus = (e) => {
    if (e.target.value === '') {
      setactive({ ...active, [e.target.id]: false })
    }
  }

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

  const filter1 = filter(faculty, {
    // limit: 1,
    keywords: `personal.fm_name:${state.keyword}`,
    caseSensitive: false,
  })
  const filter2 = filter(filter1, {
    // limit: 1,
    keywords: `faculty.fm_university:${state.university}`,
    caseSensitive: false,
  })

  const filter3 = filter(filter2, {
    // limit: 1,
    keywords: `faculty.fm_department:${state.department}`,
    caseSensitive: false,
  })
  const filter4 = filter(filter3, {
    // limit: 1,
    keywords: `faculty.fm_courses:${state.course}`,
    caseSensitive: false,
  })
  const filter5 = filter(filter4, {
    // limit: 1,
    keywords: `faculty.fm_experties:${state.experty}`,
    caseSensitive: false,
  })
  const filter6 = filter(filter5, {
    // limit: 1,
    keywords: `faculty.fm_interests:${state.professional}`,
    caseSensitive: false,
  })

  return (
    <>
      <div className={SearchCss.container} id="search">
        <h2>Search your Faculty Member</h2>
        <div className={SearchCss.inside}>
          <div className={SearchCss.col}>
            <div className={SearchCss.row}>
              <input
                type="text"
                id="keyword"
                name="keyword"
                onChange={handleChange}
                value={state.keyword}
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
              <label
                className={active.keyword ? SearchCss.active : null}
                htmlFor="keyword"
              >
                Name
              </label>
              <button
                className={SearchCss.filterbtn}
                onClick={() => setactive({ ...active, filter: !active.filter })}
                style={
                  active.filter
                    ? { backgroundColor: '#d82a4e', color: 'white' }
                    : null
                }
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
              <input
                type="text"
                name="university"
                list="universityList"
                onChange={handleChange}
                value={state.university}
                id="university"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
              <label
                className={active.university ? SearchCss.active : null}
                htmlFor="university"
              >
                University
              </label>
              <datalist id="universityList">
                {universities.map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
              </datalist>
            </div>

            <div className={SearchCss.row}>
              <input
                type="text"
                name="department"
                list="departmentList"
                onChange={handleChange}
                value={state.department}
                id="department"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
              <label
                className={active.department ? SearchCss.active : null}
                htmlFor="department"
              >
                Department
              </label>
              <datalist id="departmentList">
                {departments.map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
              </datalist>
            </div>
          </div>
          <div
            className={SearchCss.col}
            style={{ display: active.filter ? 'flex' : 'none' }}
          >
            <div className={SearchCss.row}>
              <input
                type="text"
                name="course"
                list="courseList"
                onChange={handleChange}
                value={state.course}
                id="course"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
              <label
                className={active.course ? SearchCss.active : null}
                htmlFor="course"
              >
                Course
              </label>
              <datalist id="courseList">
                <option value="first" disabled style={{ display: 'none' }}>
                  Choose Course
                </option>
                {courses.map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
              </datalist>
            </div>
            <div className={SearchCss.row}>
              <input
                type="text"
                name="experty"
                list="expertyList"
                onChange={handleChange}
                value={state.experty}
                id="experty"
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
              <label
                className={active.experty ? SearchCss.active : null}
                htmlFor="experty"
              >
                Area of Experties
              </label>
              <datalist id="expertyList">
                <option value="first" disabled style={{ display: 'none' }}>
                  Choose Area of Experties
                </option>
                {experties.map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
              </datalist>
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
                name="professional"
                type="text"
                onChange={handleChange}
                value={state.professional}
                onFocus={handleFocus}
                onBlur={clearFocus}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={SearchCss.tags}>
        {state.keyword ? (
          <div className={SearchCss.tagrow}>
            Name:{' '}
            <span>
              {state.keyword}&emsp;{' '}
              <span
                className={SearchCss.span}
                id="keyword"
                onClick={handleClear}
              >
                {' '}
                X
              </span>
            </span>{' '}
          </div>
        ) : null}
        {state.university ? (
          <div className={SearchCss.tagrow}>
            University:{' '}
            <span>
              {state.university}&emsp;{' '}
              <span
                className={SearchCss.span}
                id="university"
                onClick={handleClear}
              >
                {' '}
                X
              </span>
            </span>{' '}
          </div>
        ) : null}
        {state.department ? (
          <div className={SearchCss.tagrow}>
            Department:{' '}
            <span>
              {state.department}&emsp;{' '}
              <span
                className={SearchCss.span}
                id="department"
                onClick={handleClear}
              >
                {' '}
                X
              </span>
            </span>{' '}
          </div>
        ) : null}
        {state.course ? (
          <div className={SearchCss.tagrow}>
            Course:{' '}
            <span>
              {state.course}&emsp;{' '}
              <span
                className={SearchCss.span}
                id="course"
                onClick={handleClear}
              >
                {' '}
                X
              </span>
            </span>{' '}
          </div>
        ) : null}
        {state.experty ? (
          <div className={SearchCss.tagrow}>
            Experties:{' '}
            <span>
              {state.experty}&emsp;{' '}
              <span
                className={SearchCss.span}
                id="experty"
                onClick={handleClear}
              >
                {' '}
                X
              </span>
            </span>{' '}
          </div>
        ) : null}
        {state.professional ? (
          <div className={SearchCss.tagrow}>
            Professional Interests:{' '}
            <span>
              {state.professional}&emsp;{' '}
              <span
                className={SearchCss.span}
                id="professional"
                onClick={handleClear}
              >
                {' '}
                X
              </span>
            </span>{' '}
          </div>
        ) : null}
      </div>
      <div className={SearchCss.cards}>
        {filter6.map((el, i) => (
          <FacultyCard key={i} el={el} />
        ))}
      </div>
    </>
  )
}

export default withRouter(Search)
