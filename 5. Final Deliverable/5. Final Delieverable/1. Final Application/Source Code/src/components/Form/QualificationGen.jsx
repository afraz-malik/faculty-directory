import React from 'react'
import FormCss from './Form.module.css'

const QualificationGen = ({ qual, handleQual, index, handleRemoved }) => {
  return (
    <div className={FormCss.col50}>
      {index > 0 ? (
        <div className={FormCss.addless}>
          <span className="span" style={{ color: 'lightgrey' }}></span>
          <span
            className={FormCss.span3}
            onClick={() => handleRemoved(index, qual.q_id)}
          >
            Remove
          </span>
          <hr className={FormCss.hr} />
        </div>
      ) : null}
      <div className={FormCss.col3}>
        <div>
          <label htmlFor="institute">
            <i className="fa fa-institution"></i> Institute Attended
          </label>
          <input
            type="text"
            id="institute"
            name="institute_attended"
            placeholder="Institute name ..."
            value={qual.institute_attended}
            onChange={(e) => handleQual(e, index)}
            required
          />
        </div>

        <div>
          <label htmlFor="egree">
            <i className="fa fa-graduation-cap" aria-hidden="true"></i> Degree
            Title
          </label>
          <input
            type="text"
            id="degree"
            name="degree_tittle"
            placeholder="Degree title here ..."
            value={qual.degree_tittle}
            onChange={(e) => handleQual(e, index)}
            required
          />
        </div>
        <div>
          <label htmlFor="year">
            <i className="fa fa-calendar" aria-hidden="true"></i> Year of
            Passing
          </label>
          <input
            type="number"
            id="year"
            name="year_of_passing"
            placeholder="Year only ..."
            value={qual.year_of_passing}
            onChange={(e) => handleQual(e, index)}
            required
          />
        </div>
      </div>
    </div>
  )
}

export default QualificationGen
