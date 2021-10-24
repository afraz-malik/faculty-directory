import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changePassword } from '../../redux/user/user.action'
import ForgetPasswordCss from './ForgetPassword.module.scss'

// Redux
// import { useDispatch } from 'react-redux'
// import { EditClientAction } from '../../redux/clients/clients.actions'
// import { EditUserAction } from '../../redux/users/users.actions'

const ForgetPassword = ({ toggleEditBox, email }) => {
  const [state, setstate] = useState({ newp: '', cnewp: '' })
  const dispatch = useDispatch()
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    // event.preventDefault()
    if (state.newp === state.cnewp) {
      dispatch(changePassword(state.newp))
      setstate({ newp: '', cnewp: '' })

      toggleEditBox()
    } else {
      alert('Password Not Matched!')
    }
    // alert()
    // title === 'Client'
    //   ? dispatch(EditClientAction({ newClient: newData, index }))
    //   : dispatch(EditUserAction({ newUser: newData, index }))
  }

  return (
    <div className={ForgetPasswordCss.outerbox}>
      <div className={ForgetPasswordCss.box}>
        <div className={ForgetPasswordCss.head}>
          <h2>Change Password</h2>
        </div>
        <div className={ForgetPasswordCss.body}>
          <h4>For {email}</h4>
          <div className={ForgetPasswordCss.form}>
            <input
              type="password"
              name="newp"
              onChange={handleChange}
              value={state.newp}
              required
              placeholder="New Password"
            />
            <input
              type="password"
              name="cnewp"
              onChange={handleChange}
              value={state.cnewp}
              required
              placeholder="Confirm New Password"
            />
            {/* <input
              type="password"
              name="roles"
              onChange={handleChange}
              value={newData.roles}
            /> */}
            <div className={ForgetPasswordCss.buttons}>
              <button
                className={ForgetPasswordCss.addbtn}
                type="button"
                onClick={() => handleSubmit()}
              >
                {' '}
                Update
              </button>
              <button
                type="button"
                className={ForgetPasswordCss.cancel}
                onClick={() => toggleEditBox()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
