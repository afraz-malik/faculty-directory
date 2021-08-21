import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import DashboardProfile from '../DashboardProfile/DashboardProfile'
import Form from '../Form/Form'
import FacultyDashboardCSs from './FacultyDashboard.module.scss'
const FacultyDashboard = ({ match }) => {
  let profile = false
  let edit = false

  if (window.location.href.indexOf('edit-faculty') > -1) {
    edit = true
  } else if (window.location.href.indexOf('dashboard') > -1) {
    profile = true
  }
  return (
    <div className={FacultyDashboardCSs.container}>
      <nav>
        <ul>
          <li>
            <Link
              to={`${match.path}`}
              style={
                profile
                  ? {
                      color: '#d82a4e',
                      borderBottom: '5px solid #d82a4e',
                    }
                  : null
              }
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to={`${match.path}/edit-faculty`}
              style={
                edit
                  ? {
                      color: '#d82a4e',
                      borderBottom: '5px solid #d82a4e',
                    }
                  : null
              }
            >
              Edit Faculty Details
            </Link>
          </li>
        </ul>
      </nav>
      <Route exact path={`${match.path}`} component={DashboardProfile} />
      <Route exact path={`${match.path}/edit-faculty`} component={Form} />
    </div>
  )
}

export default withRouter(FacultyDashboard)
