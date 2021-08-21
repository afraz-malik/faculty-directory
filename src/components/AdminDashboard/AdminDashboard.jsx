import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import AdminDashboardCss from './AdminDashboard.module.scss'
import DashboardProfile from '../DashboardProfile/DashboardProfile'
import DataBox from '../DataBox/DataBox'
const AdminDashboard = ({ match }) => {
  let profile = false
  let manage = false
  let requests = false

  if (window.location.href.indexOf('manage-faculty') > -1) {
    manage = true
  } else if (window.location.href.indexOf('requests') > -1) {
    requests = true
  } else if (window.location.href.indexOf('dashboard') > -1) {
    profile = true
  }
  return (
    <div className={AdminDashboardCss.container}>
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
              to={`${match.path}/manage-faculty`}
              style={
                manage
                  ? {
                      color: '#d82a4e',
                      borderBottom: '5px solid #d82a4e',
                    }
                  : null
              }
            >
              Manage Faculty Details
            </Link>
          </li>
          <li>
            <Link
              to={`${match.path}/manage-requests`}
              style={
                requests
                  ? {
                      color: '#d82a4e',
                      borderBottom: '5px solid #d82a4e',
                    }
                  : null
              }
            >
              Pending Faculty Requests
            </Link>
          </li>
        </ul>
      </nav>
      <Route exact path={`${match.path}`} component={DashboardProfile} />
      <Route exact path={`${match.path}/manage-faculty`} component={DataBox} />
      <Route exact path={`${match.path}/manage-requests`} component={DataBox} />
    </div>
  )
}

export default withRouter(AdminDashboard)
