import React, { useState } from 'react'
import EditBox from '../EditBox/EditBox'
import facultyRequestsCss from './facultyRequests.module.scss'

// Redux
// import { useDispatch } from 'react-redux'
// import { DeleteClientAction } from '../../redux/clients/clients.actions'
// import { DeleteUserAction } from '../../redux/users/users.actions'
// Components

const DataListGen = ({ data, title, index }) => {
  // const dispatch = useDispatch()
  const [editBox, setEditBox] = useState(false)
  const toggleEditBox = () => {
    setEditBox(!editBox)
  }
  const manageDelete = () => {
    const result = window.confirm('Are you sure you want to delete?')
    if (result) {
      // title === 'Client'
      //   ? dispatch(DeleteClientAction(index))
      //   : dispatch(DeleteUserAction(index))
    }
  }
  return (
    <tr>
      <td>
        {data.fname} {data.lname}
      </td>
      <td>{data.company}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>
        <div className={facultyRequestsCss.actions}>
          <img alt="" src="images/edit.svg" onClick={() => toggleEditBox()} />
          <img alt="" src="images/delete.svg" onClick={() => manageDelete()} />
          {editBox ? (
            <EditBox
              toggleEditBox={toggleEditBox}
              data={data}
              index={index}
              title={title}
            />
          ) : null}
        </div>
      </td>
    </tr>
  )
}

export default DataListGen
