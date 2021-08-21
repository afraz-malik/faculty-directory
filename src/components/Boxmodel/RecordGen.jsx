import React from 'react'
import BoxmodelCss from './Boxmodel.module.css'
// Redux
// import { useDispatch } from 'react-redux'
// import { deleteUser } from '../../redux/action'
// import { oldUser } from '../../redux/action'

const RecordGen = ({ counter, user, toggleForm }) => {
  // const dispatch = useDispatch()
  const triggerDelete = () => {
    var answer = window.confirm('Are you sure you want to delete?')
    if (answer) {
      // dispatch(deleteUser(user))
    } else {
      //some code
    }
  }
  const triggerEdit = () => {
    // dispatch(oldUser(user))
    toggleForm()
  }
  return (
    <tr>
      <td>{counter}</td>
      <td>{user.fm_name}</td>
      <td>{user.fm_address}</td>
      <td>{user.fm_designation}</td>
      <td>Rs. {user.fm_salary}</td>
      <td>
        {user.qualification.map((qual, j) => {
          return <QualGen key={j} counter={j} qual={qual.degree_tittle} />
        })}
      </td>
      <td>
        {user.qualification.map((qual, j) => {
          return <QualGen key={j} counter={j} qual={qual.year_of_passing} />
        })}
      </td>
      <td>
        {user.qualification.map((qual, j) => {
          return <QualGen key={j} counter={j} qual={qual.institute_attended} />
        })}
      </td>
      <td>
        <div className={BoxmodelCss.btn}>
          <i className="fa fa-pencil" onClick={() => triggerEdit()}></i>
          <i className="fa fa-trash" onClick={() => triggerDelete()}></i>
        </div>
      </td>
    </tr>
  )
}

export const QualGen = ({ qual, counter }) => {
  let line = false
  if (counter > 0) {
    line = true
  }
  return (
    <div
      className={BoxmodelCss.qual}
      style={line ? { borderTop: '1px solid lightgrey' } : null}
    >
      {/* {counter + 1}. &emsp; */}
      {qual}
    </div>
  )
}

export default RecordGen
