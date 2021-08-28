import React, { useState } from 'react'
import ForgetPassword from '../ForgetPassword/ForgetPassword'
import DashboardProfileCss from './DashboardProfile.module.scss'
// Redux
// import { connect, useDispatch } from 'react-redux'
// import { updateUser } from '../../redux/user/user.actions'
// Components
// import BoxModel from '../boxModel/boxModel'
// import Button from '../button/button'
// import { Spinner } from '../spinner/spinner'
// import { SingleForgetBox } from '../ForgetPasswordBox/ForgetPasswordBox'

// const mapStateToProps = (state) => ({
//   user: state.setUser.user,
//   isLoading: state.setUser.loading,
// })
const DashboardProfile = ({ user, isLoading }) => {
  // const dispatch = useDispatch()
  const [editBox, setEditBox] = useState(false)
  const toggleEditBox = () => {
    setEditBox(!editBox)
  }
  // const [showBox, manageBox] = useState(false)
  const [usercredentials, setUsercredentials] = useState({
    uid: '',
    displayName: 'Admin',
    email: 'Admin',
    zip: '35002',
    mobile: '+92 324 8205435',
    username: 'Admin123',
    gender: '',
    country: '',
    city: '',
    imgurl: 'images/authors/9.png',
  })
  const [images, setimages] = useState([])
  // const showBoxFunction = () => {
  //   manageBox(true)
  // }
  // const hideBoxFunction = () => {
  //   manageBox(false)
  // }
  const handleChange = (event) => {
    setUsercredentials({
      ...usercredentials,
      [event.target.name]: event.target.value,
    })
  }
  const handleImage = (event) => {
    setUsercredentials({
      ...usercredentials,
      imgurl:
        event.target.files.length > 0
          ? URL.createObjectURL(event.target.files[0])
          : usercredentials.imgurl,
    })
    setimages({
      images: event.target.files[0],
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(usercredentials)
    // dispatch(updateUser({ images, usercredentials }))
    if (images == null) return
    // dispatch(imageUpload(images))
  }
  // console.log(user)
  return (
    <div className={DashboardProfileCss.container}>
      <div className={DashboardProfileCss.body}>
        <div className={DashboardProfileCss.top}>
          {/* <img alt="" src="images\john.png" /> */}
          <div className={DashboardProfileCss.imgblock}>
            <div className={DashboardProfileCss.img}>
              <img alt="" src={usercredentials.imgurl} />
            </div>
            <input type="file" id="img" name="img" onChange={handleImage} />
            <label htmlFor="img" className={DashboardProfileCss.imglabel}>
              <i className="fas fa-camera"></i>
            </label>
          </div>
          <h3>PROFILE PICTURE</h3>
          <form onSubmit={handleSubmit}>
            <div className={DashboardProfileCss.row}>
              <div className={DashboardProfileCss.column}>
                <label>FULL NAME</label>
                <input
                  type="text"
                  value={`${usercredentials.displayName}`}
                  name="displayName"
                  onChange={handleChange}
                />
              </div>
              <div className={DashboardProfileCss.column}>
                <label>EMAIL</label>
                <input
                  type="text"
                  value={`${usercredentials.email}`}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={DashboardProfileCss.row}>
              <div className={DashboardProfileCss.column}>
                <label>GENDER </label>
                <select
                  name="gender"
                  id="city"
                  value={usercredentials.gender}
                  onChange={handleChange}
                >
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </select>
              </div>
              <div className={DashboardProfileCss.column}>
                <label>COUNTRY </label>
                <select
                  name="country"
                  id="city"
                  value={usercredentials.country}
                  onChange={handleChange}
                >
                  <option value="1">Canada</option>
                  <option value="2">Italy</option>
                  <option value="3">Switzerland</option>
                </select>
              </div>
            </div>
            <div className={DashboardProfileCss.row}>
              <div className={DashboardProfileCss.column}>
                <label>CITY </label>
                <select name="city" id="city" onChange={handleChange}>
                  <option value="1">Alashka</option>
                  <option value="2">New York</option>
                  <option value="3">Maldives</option>
                </select>
              </div>
              <div className={DashboardProfileCss.column}>
                <label>ZIP CODE</label>
                <input
                  type="number"
                  value={usercredentials.zip}
                  name="zip"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={DashboardProfileCss.row}>
              <div className={DashboardProfileCss.column}>
                <label>USERNAME</label>
                <input
                  type="text"
                  value={usercredentials.username}
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className={DashboardProfileCss.column}>
                <span>
                  <label>Mobile Number</label>
                  <span className={DashboardProfileCss.error}>
                    &#9888; Not Verified
                  </span>
                </span>
                <input
                  type="text"
                  value={usercredentials.mobile}
                  name="mobile"
                  onChange={handleChange}
                />
              </div>
            </div>
            <span className={DashboardProfileCss.changepassword}>
              PASSWORD:
              <span onClick={() => toggleEditBox()}>Change Password</span>
              {editBox ? (
                <ForgetPassword
                  toggleEditBox={toggleEditBox}
                  email={usercredentials.email}
                />
              ) : null}
            </span>
            <button type="submit">SAVE</button>
          </form>
        </div>
      </div>
      {/* {showBox ? (
        <SingleForgetBox
          close={hideBoxFunction}
          email={usercredentials.email}
        />
      ) : null}
      {isLoading ? <Spinner /> : null} */}
    </div>
  )
}

export default DashboardProfile
