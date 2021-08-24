import React, { useState } from 'react'
import EditBoxCss from './EditBox.module.scss'

// Redux
// import { useDispatch } from 'react-redux'
// import { EditClientAction } from '../../redux/clients/clients.actions'
// import { EditUserAction } from '../../redux/users/users.actions'

const EditBox = ({ toggleEditBox, data, index, title }) => {
  // const dispatch = useDispatch()
  const [personal, setPersonal] = useState(data.personal)
  const [faculty, setFaculty] = useState(data.faculty)
  const [qualification, setQualification] = useState(data.qualification)

  const handlePersonal = (event) => {
    setPersonal({ ...personal, [event.target.name]: event.target.value })
  }
  const handleFaculty = (event) => {
    setFaculty({ ...faculty, [event.target.name]: event.target.value })
  }
  // eslint-disable-next-line
  const handleQualification = (event) => {
    setQualification({
      ...qualification,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // title === 'Client'
    //   ? dispatch(EditClientAction({ newClient: newData, index }))
    //   : dispatch(EditUserAction({ newUser: newData, index }))
    toggleEditBox()
  }
  const handleImage = (event) => {
    setPersonal({
      ...personal,
      imgurl:
        event.target.files.length > 0
          ? URL.createObjectURL(event.target.files[0])
          : personal.imgurl,
      images: event.target.files[0],
    })
    // setFaculty({})
  }
  console.log(personal)
  return (
    <div className={EditBoxCss.outerbox}>
      <div className={EditBoxCss.box}>
        <div className={EditBoxCss.head}>
          <h2>Edit faculty details</h2>
        </div>
        <div className={EditBoxCss.body}>
          <form onSubmit={handleSubmit}>
            <div className={EditBoxCss.imgblocktop}>
              <div className={EditBoxCss.imgblock}>
                <div className={EditBoxCss.img}>
                  <img alt="" src={personal.imgurl} />
                </div>
                <input type="file" id="img" name="img" onChange={handleImage} />
                <label htmlFor="img" className={EditBoxCss.imglabel}>
                  <i className="fas fa-camera"></i>
                </label>
              </div>
            </div>
            <label>Name</label>
            <input
              type="text"
              name="fm_name"
              onChange={handlePersonal}
              value={personal.fm_name}
            />
            <label>Gender</label>
            <select
              name="fm_gender"
              value={personal.fm_gender}
              onChange={handlePersonal}
            >
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>

            <label>DOB</label>
            <input
              type="date"
              name="fm_dob"
              onChange={handlePersonal}
              value={personal.fm_dob}
            />

            <label>Email</label>
            <input
              type="text"
              name="fm_email"
              onChange={handlePersonal}
              value={personal.fm_email}
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="fm_phone"
              onChange={handlePersonal}
              value={personal.fm_phone}
            />
            <label>University</label>
            <input
              type="text"
              name="fm_university"
              onChange={handleFaculty}
              value={faculty.fm_university}
            />
            <label>Department</label>
            <input
              type="text"
              name="fm_department"
              onChange={handleFaculty}
              value={faculty.fm_department}
            />
            <label>Designation</label>
            <input
              type="text"
              name="fm_designation"
              onChange={handleFaculty}
              value={faculty.fm_designation}
            />
            <label>Courses</label>
            <input
              type="text"
              name="fm_courses"
              onChange={handleFaculty}
              value={faculty.fm_courses}
            />
            <label>Proffessional Interests</label>
            <input
              type="text"
              name="fm_interests"
              onChange={handleFaculty}
              value={faculty.fm_interests}
            />
            <label>Experties</label>
            <input
              type="text"
              name="fm_experties"
              onChange={handleFaculty}
              value={faculty.fm_experties}
            />
            <label>City</label>
            <input
              type="text"
              name="fm_city"
              onChange={handleFaculty}
              value={faculty.fm_city}
            />
            <label>Country</label>
            <input
              type="text"
              name="fm_country"
              onChange={handleFaculty}
              value={faculty.fm_country}
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