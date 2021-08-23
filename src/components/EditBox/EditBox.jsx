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
  const [images, setimages] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    // title === 'Client'
    //   ? dispatch(EditClientAction({ newClient: newData, index }))
    //   : dispatch(EditUserAction({ newUser: newData, index }))
    toggleEditBox()
  }
  const handleImage = (event) => {
    setNewData({
      ...newData,
      imgurl:
        event.target.files.length > 0
          ? URL.createObjectURL(event.target.files[0])
          : newData.imgurl,
    })
    setimages({
      images: event.target.files[0],
    })
  }
  console.log(data)
  return (
    <div className={EditBoxCss.outerbox}>
      <div className={EditBoxCss.box}>
        <div className={EditBoxCss.head}>
          <h2>Edit {title} details</h2>
        </div>
        <div className={EditBoxCss.body}>
          <form onSubmit={handleSubmit}>
            <div className={EditBoxCss.imgblock}>
              <div className={EditBoxCss.img}>
                <img alt="" src={newData.personal.imgurl} />
              </div>
              <input type="file" id="img" name="img" onChange={handleImage} />
              <label htmlFor="img" className={EditBoxCss.imglabel}>
                <i className="fas fa-camera"></i>
              </label>
            </div>
            <label>Name</label>
            <input
              type="text"
              name="fname"
              onChange={handleChange}
              value={newData.personal.fm_name}
            />
            <label>Gender</label>
            <select
              name="roles"
              value={newData.personal.fm_gender}
              onChange={handleChange}
            >
              <option
                disabled
                defaultValue
                selected
                style={{ display: 'none' }}
              >
                {' '}
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>

            <label>DOB</label>
            <input
              type="date"
              name="email"
              onChange={handleChange}
              value={newData.personal.fm_dob}
            />

            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={newData.personal.fm_email}
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.personal.fm_phone}
            />
            <label>University</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.faculty.fm_university}
            />
            <label>Department</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.faculty.fm_department}
            />
            <label>Designation</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.faculty.fm_designation}
            />
            <label>Courses</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.faculty.fm_courses}
            />
            <label>Proffessional Interests</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.faculty.fm_interests}
            />
            <label>Experties</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.faculty.fm_experties}
            />
            <label>City</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.faculty.fm_city}
            />
            <label>Country</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={newData.faculty.fm_country}
            />

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
