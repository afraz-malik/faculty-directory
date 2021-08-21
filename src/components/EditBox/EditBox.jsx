import React, { useState } from 'react'
import EditBoxCss from './EditBox.module.scss'

// Redux
// import { useDispatch } from 'react-redux'
// import { EditClientAction } from '../../redux/clients/clients.actions'
// import { EditUserAction } from '../../redux/users/users.actions'

const EditBox = ({ toggleEditBox, data, index, title }) => {
  // const dispatch = useDispatch()
  const [newData, setNewData] = useState(data)
  const handleChange = (event) => {
    setNewData({ ...newData, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // title === 'Client'
    //   ? dispatch(EditClientAction({ newClient: newData, index }))
    //   : dispatch(EditUserAction({ newUser: newData, index }))
    toggleEditBox()
  }
  return (
    <div className={EditBoxCss.outerbox}>
      <div className={EditBoxCss.box}>
        <div className={EditBoxCss.head}>
          <h2>Edit {title} details</h2>
        </div>
        <div className={EditBoxCss.body}>
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              onChange={handleChange}
              value={newData.fname}
            />

            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              onChange={handleChange}
              value={newData.lname}
            />

            <label>Company</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.company}
            />

            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={newData.email}
            />

            <label>User Role</label>
            <select name="roles" value={newData.roles} onChange={handleChange}>
              <option
                disabled
                defaultValue
                selected
                style={{ display: 'none' }}
              >
                {' '}
              </option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="ThirdPary">ThirdPary</option>
            </select>
            {/* <input
              type="text"
              name="roles"
              onChange={handleChange}
              value={newData.roles}
            /> */}
            <div className={EditBoxCss.buttons}>
              <button className={EditBoxCss.addbtn} type="submit">
                {' '}
                Update
              </button>
              <button
                type="button"
                className={EditBoxCss.cancel}
                onClick={() => toggleEditBox()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditBox
