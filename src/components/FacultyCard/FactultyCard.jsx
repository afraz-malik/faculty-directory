import React from 'react'
import { useSelector } from 'react-redux'

import { withRouter } from 'react-router-dom'
import FacultyCardCss from './FacultyCard.module.scss'

const FactultyCard = ({ history }) => {
  const faculty = useSelector((state) => state.FacultyReducer.faculty)
  console.log(faculty)
  return (
    <div className={FacultyCardCss.cards}>
      {faculty.map((el, i) => (
        <div
          key={i}
          className={FacultyCardCss.card}
          onClick={() =>
            history.push(`/faculty/${el.personal.fm_name.toLowerCase()}`)
          }
        >
          <div
            className={FacultyCardCss.img}
            style={{ backgroundImage: `url(${el.personal.imgurl})` }}
          ></div>
          <div className={FacultyCardCss.cardtext}>
            <div className={FacultyCardCss.details}>
              <h3>{el.personal.fm_name}</h3>
              <h6>{el.faculty.fm_designation}</h6>
              <p>
                {' '}
                <i className="fas fa-user-graduate"></i>
                &nbsp; {el.faculty.fm_department}
              </p>
              <p>
                <i className="fas fa-school"></i>
                &nbsp; {el.faculty.fm_university}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default withRouter(FactultyCard)
