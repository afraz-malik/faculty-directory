import React from 'react'
import FacultyRequestsCss from './FacultyRequests.module.scss'

// Redux
import { useDispatch } from 'react-redux'
import { approveUser } from '../../redux/user/user.action'

const DataListGen = ({ data }) => {
  const dispatch = useDispatch()

  return (
    <tr>
      <td>{data.displayName}</td>
      <td>{data.university}</td>
      <td>{data.email}</td>
      <td>
        <div className={FacultyRequestsCss.actions}>
          <span
            onClick={() => dispatch(approveUser({ id: data.id, manage: true }))}
          >
            Approve
          </span>
          <span
            onClick={() =>
              dispatch(approveUser({ id: data.id, manage: false }))
            }
          >
            Decline
          </span>
        </div>
      </td>
    </tr>
  )
}

export default DataListGen
