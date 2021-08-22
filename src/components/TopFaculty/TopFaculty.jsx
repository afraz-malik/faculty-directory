import React from 'react'
import TopFacultyCss from './TopFaculty.module.scss'
import FacultyCard from '../FacultyCards/FacultyCard'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { topFacultySelector } from '../../redux/selector'

const mapStateToProps = (state) => {
  return {
    faculty: topFacultySelector(state),
  }
}

const TopFaculty = ({ faculty }) => {
  return (
    <div className={TopFacultyCss.container}>
      <div className={TopFacultyCss.title}>
        <h4>Top Faculty</h4>
        <p>
          This template is designed by Bc180404438 for University purpose on
          JustinMind. The quick brown fox jums over the lazy dog. This template
          is designed by Bc180404438 for University purpose on JustinMind.
        </p>
      </div>
      <div className={TopFacultyCss.faculty}>
        {faculty.map((el, i) => (
          <FacultyCard key={i} el={el} />
        ))}
      </div>
      <Link to="/faculty" className={TopFacultyCss.more}>
        <span>See All &#x2192;</span>
      </Link>
    </div>
  )
}

export default connect(mapStateToProps, null)(TopFaculty)
