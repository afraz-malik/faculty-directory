import React from 'react'
import FacultyCardCss from './FacultyCard.module.scss'

const FactultyCard = ({ faculty }) => {
  return (
    <div className={FacultyCardCss.cards}>
      {faculty.map((el) => (
        <div key={el.name} className={FacultyCardCss.card}>
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
                <i class="fas fa-user-graduate"></i>
                &nbsp; {el.subject}
              </p>
              <p>
                <i class="fas fa-school"></i>
                &nbsp; {el.university}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FactultyCard
