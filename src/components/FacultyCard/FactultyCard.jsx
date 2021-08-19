import React from 'react'
import { withRouter } from 'react-router-dom'
import FacultyCardCss from './FacultyCard.module.scss'

const FactultyCard = ({ faculty, history }) => {
  return (
    <div className={FacultyCardCss.cards}>
      {faculty.map((el, i) => (
        <div
          key={i}
          className={FacultyCardCss.card}
          onClick={() => history.push(`/faculty/${el.name.toLowerCase()}`)}
        >
          <div
            className={FacultyCardCss.img}
            style={{ backgroundImage: `url(images/authors/${el.image})` }}
          ></div>
          <div className={FacultyCardCss.cardtext}>
            <div className={FacultyCardCss.details}>
              <h3>{el.name}</h3>
              <h6>{el.designation}</h6>
              <p>
                {' '}
                <i className="fas fa-user-graduate"></i>
                &nbsp; {el.subject}
              </p>
              <p>
                <i className="fas fa-school"></i>
                &nbsp; {el.university}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default withRouter(FactultyCard)
