import React from 'react'
import { withRouter } from 'react-router-dom'
import FacultyCardCss from './FacultyCard.module.scss'

const FacultyCard = ({ el, history }) => {
  return (
    <div
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
  )
}
export default withRouter(FacultyCard)
