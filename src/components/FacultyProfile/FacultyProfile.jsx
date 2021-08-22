import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import FacultyProfileCss from './FacultyProfile.module.scss'
import { connect } from 'react-redux'

import { facultySelectorByParam } from '../../redux/selector'

const mapStateToProps = (state, ownProps) => {
  return {
    facultySelector: facultySelectorByParam(ownProps.match.params.id)(state),
  }
}

const FacultyProfile = ({ match, history, facultySelector }) => {
  window.onscroll = function () {
    myFunction()
  }
  React.useEffect(() => {
    if (facultySelector.length > 0) {
      history.push(`/faculty/${facultySelector[0].personal.fm_name}`)
      const { personal, qualification, faculty } = facultySelector[0]
      setF({
        name: personal.fm_name,
        department: faculty.fm_department,
        designation: faculty.fm_designation,
        city: faculty.fm_city,
        country: faculty.fm_country,
        phone: personal.fm_phone,
        email: personal.fm_email,
        university: faculty.fm_university,
        image: personal.imgurl,
        institute: qualification[0].institute_attended,
      })
    }
    // eslint-disable-next-line
  }, [])
  const [state, setstate] = React.useState(false)
  const [f, setF] = React.useState({
    name: 'null',
    department: 'null',
    designation: 'null',
    city: 'null',
    country: 'null',
    phone: 'null',
    email: 'null',
    image: 'null',
    institute: 'null',
  })

  function myFunction() {
    if (window.pageYOffset >= 300) {
      setstate(true)
    } else {
      setstate(false)
    }
  }
  return (
    <div className={FacultyProfileCss.container}>
      <div
        className={`${FacultyProfileCss.head}`}
        style={
          state
            ? {
                position: 'fixed',
                top: 0,
                boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%)',
              }
            : { position: 'unset', boxShadow: 'unset' }
        }
      >
        {f.name}
      </div>

      <div
        className={FacultyProfileCss.section}
        style={state ? { marginTop: '150px' } : null}
      >
        <div className={FacultyProfileCss.left}>
          <div className={FacultyProfileCss.img}>
            <img src={f.image} alt="" />
          </div>
          <div className={FacultyProfileCss.info}>
            <h3>CONTACT INFO</h3>
            <hr className={FacultyProfileCss.hr} />
            <p> {f.department}</p>
            <p> {f.university}</p>
            <p>
              {' '}
              {f.city}, {f.country}
            </p>
            <p> Ph: {f.phone}</p>
            <p> Email: {f.email}</p>
            <div className={FacultyProfileCss.button}>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className={FacultyProfileCss.right}>
          <div className={FacultyProfileCss.header}>
            <h2>{f.name}</h2>
            <div className={FacultyProfileCss.desg}>{f.designation}</div>
            <div className={FacultyProfileCss.deg}>{f.institute}</div>
          </div>
          <div className={FacultyProfileCss.row}>
            <h3>RESEARCH INTERESTS</h3>
            <hr className={FacultyProfileCss.hr} />
            <p>
              The focus of Dr. Sara’s Doctoral Research was the Development of
              Social Networks in an Entrepreneurial Setting. Using
              Constructivist Grounded Theory Method, she constructed a
              substantive theory that conceptualizes development of these
              networks, factors influencing their development and changes
              occurring over time. Her other research interests include the
              impact of different cultural dispositions on the development of
              the entrepreneur’s social network, the research methodologies used
              in the field of Entrepreneurship and Entrepreneurship Education.
            </p>
          </div>
          <div className={FacultyProfileCss.row}>
            <h3>BIOGRAPHY</h3>
            <hr className={FacultyProfileCss.hr} />
            <p>
              Dr. Sara has done her PhD in Entrepreneurship from University of
              Exeter, United Kingdom. Before her PhD, she did MSc. International
              Management (Entrepreneurship and Innovation) with Distinction from
              University of Exeter, United Kingdom. Prior to joining ITU full
              time, she has been working as a Visiting Faculty of
              Entrepreneurship for the EMBITE program since 2018. She has
              received extensive trainings for startups and academic trainings
              including Learning and Teaching in Higher Education (LTHE) Stage 1
              and Researcher Development from University of Exeter. She has also
              has been involved in advisory roles for students as well as
              startups both in Pakistan and United Kingdom.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(connect(mapStateToProps, null)(FacultyProfile))
