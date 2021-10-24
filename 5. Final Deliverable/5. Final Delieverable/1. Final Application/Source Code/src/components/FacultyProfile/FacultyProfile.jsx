import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import FacultyProfileCss from './FacultyProfile.module.scss'
import { connect } from 'react-redux'

import {
  facultySelectorByParam,
  facultySelectorByUid,
} from '../../redux/data/data.selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    facultySelector: ownProps.location.uid
      ? facultySelectorByUid(ownProps.location.uid)(state)
      : facultySelectorByParam(ownProps.match.params.id)(state),
  }
}

const FacultyProfile = ({ history, facultySelector }) => {
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
        qualification: qualification,
        courses: faculty.fm_courses,
        experties: faculty.fm_experties,
        interests: faculty.fm_interests,
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
    courses: [],
    experties: [],
    qualification: [],
    interests: '',
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
            <p>Dept. {f.department},</p>
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
            <div className={FacultyProfileCss.desg}>
              {f.designation} in {f.university}
            </div>
            {/* <div className={FacultyProfileCss.deg}>{f.institute}</div> */}
          </div>
          <div className={FacultyProfileCss.row}>
            <h3>Qualification </h3>
            <hr className={FacultyProfileCss.hr} />
            <table>
              <thead>
                <tr>
                  <th>Degree Title</th>
                  <th>institute</th>
                  <th>Year Of Passing</th>
                </tr>
              </thead>
              {f.qualification.map((qual, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{qual.degree_tittle}</td>
                    <td>{qual.institute_attended}</td>
                    <td>{qual.year_of_passing}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className={FacultyProfileCss.row}>
            <h3>Courses in proffessional</h3>
            <hr className={FacultyProfileCss.hr} />
            <div className={FacultyProfileCss.tags}>
              {f.courses.map((course, j) => (
                <span key={j}>{course}</span>
              ))}
            </div>
          </div>
          <div className={FacultyProfileCss.row}>
            <h3>Area of Experties</h3>
            <hr className={FacultyProfileCss.hr} />
            <div className={FacultyProfileCss.tags}>
              {f.experties.map((course, j) => (
                <span key={j}>{course}</span>
              ))}
            </div>
          </div>
          <div className={FacultyProfileCss.row}>
            <h3>RESEARCH INTERESTS</h3>
            <hr className={FacultyProfileCss.hr} />
            <p>{f.interests}</p>
          </div>

          {/* <div className={FacultyProfileCss.row}>
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
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default withRouter(connect(mapStateToProps, null)(FacultyProfile))
