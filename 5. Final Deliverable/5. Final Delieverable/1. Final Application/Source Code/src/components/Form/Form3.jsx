import React from 'react'
import { withRouter } from 'react-router-dom'
import FormCss from './Form.module.css'
import { TagsInput } from 'react-tag-input-component'

const initialState = {
  fm_university: '',
  fm_designation: '',
  fm_department: '',
  fm_courses: [],
  fm_experties: [],
  fm_interests:
    'The focus of Dr. Sara’s Doctoral Research was the Development of Social Networks in an Entrepreneurial Setting. Using Constructivist Grounded Theory Method, she constructed a substantive theory that conceptualizes development of these networks, factors influencing their development and changes occurring over time. Her other research interests include the impact of different cultural dispositions on the development of the entrepreneur’s social network, the research methodologies used in the field of Entrepreneurship and Entrepreneurship Education.',
  fm_country: '',
  fm_city: '',
}
class Form1 extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.currentFaculty) {
      this.state = {
        fm_university: this.props.currentFaculty.faculty.fm_university,
        fm_designation: this.props.currentFaculty.faculty.fm_designation,
        fm_department: this.props.currentFaculty.faculty.fm_department,
        fm_courses: this.props.currentFaculty.faculty.fm_courses,
        fm_experties: this.props.currentFaculty.faculty.fm_experties,
        fm_interests: this.props.currentFaculty.faculty.fm_interests,
        fm_country: this.props.currentFaculty.faculty.fm_country,
        fm_city: this.props.currentFaculty.faculty.fm_city,
      }
    } else {
      this.state = initialState
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }
  handleCourses = (event) => {
    this.setState({ ...this.state, fm_courses: event })
  }
  handleExperties = (event) => {
    this.setState({ ...this.state, fm_experties: event })
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    // this.props.oldUser
    //   ? this.props.updateUser(this.state)
    //   : this.props.addUser(this.state)
    // console.log(this.state)

    if (
      this.state.fm_courses.length === 0 ||
      this.state.fm_experties.length === 0
    )
      alert('Enter Courses and/or Experties before proceeding')
    else {
      await this.props.collectData({ faculty: this.state })
      const result = window.confirm(
        'Are you sure you have verified all record and want to proceed? (Strict Action will be taken against false information)'
      )
      if (result) {
        // console.log(this.state)
        this.props.submitForm()
      }
      // console.log(this.props.history.push('/dashboard'))
    }
  }

  render() {
    return (
      <div className={FormCss.container}>
        <form onSubmit={this.handleSubmit}>
          <h3>Faculty Details</h3>
          <div className={FormCss.row}>
            <div className={FormCss.col50}>
              <label htmlFor="fm_university">
                <i className="fa fa-user"></i> University
              </label>
              <input
                type="text"
                id="fm_university"
                name="fm_university"
                placeholder="University Name"
                value={this.state.fm_university}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="fm_designation">
                <i className="fal fa-map-marker-smile"></i> Designation
              </label>
              <input
                type="text"
                id="fm_designation"
                name="fm_designation"
                placeholder="Designation at University"
                value={this.state.fm_designation}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="fm_department">
                <i className="far fa-building"></i> Department
              </label>
              <input
                type="text"
                id="fm_department"
                name="fm_department"
                placeholder="Department of University"
                value={this.state.fm_department}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="fm_courses">
                <i className="fas fa-book"></i> Courses
              </label>
              {/* <input
                type="text"
                id="fm_courses"
                name="fm_courses"
                placeholder="Type your courses"
                value={this.state.fm_courses}
                onChange={this.handleChange}
                required
              /> */}
              <TagsInput
                value={this.state.fm_courses}
                onChange={this.handleCourses}
                name="fm_courses"
                // seprators="Space"
                onExisting={() => alert('Already Exist')}
                placeHolder="Tag your courses. Press Enter to add tag"
                required
              />
              <label htmlFor="fm_experties">
                <i className="far fa-file-export"></i> Area of Experties
              </label>
              <TagsInput
                value={this.state.fm_experties}
                onChange={this.handleExperties}
                name="fm_experties"
                // seprators="Space"
                onExisting={() => alert('Already Exist')}
                placeHolder="Tag your experties. Press Enter to add tag"
                required
              />

              <label htmlFor="fm_interests">
                <i className="fas fa-user-tie"></i> Professional Interests
              </label>
              <textarea
                type="textarea"
                id="fm_interests"
                name="fm_interests"
                placeholder="Type your professional interests"
                value={this.state.fm_interests}
                onChange={this.handleChange}
                required
                rows="4"
                cols="50"
              />

              <label htmlFor="fm_country">
                <i className="fas fa-globe-asia"></i> Country
              </label>
              <input
                type="text"
                id="fm_country"
                name="fm_country"
                placeholder="Country"
                value={this.state.fm_country}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="fm_city">
                <i className="far fa-city"></i> City
              </label>
              <input
                type="text"
                id="fm_city"
                name="fm_city"
                placeholder="City"
                value={this.state.fm_city}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <label className={FormCss.lastlabel}>
            <input type="checkbox" name="sameadr" required />{' '}
            <span>
              I hereby verified the above information is correct and verified as
              per Terms & Conditions of Faculty Directory of Multi University
            </span>
          </label>
          <div className={FormCss.cancel}>
            {this.props.state > 1 ? (
              <button
                type="button"
                className={FormCss.cancelbtn}
                onClick={() => this.props.decState()}
              >
                Previous
              </button>
            ) : null}
            <input
              type="submit"
              className={FormCss.btn}
              // onClick={() => this.props.incState()}
              value="Next"
            />
          </div>
        </form>
        {/* {this.props.isLoading ? <Spinner /> : null} */}
      </div>
    )
  }
}

export default withRouter(Form1)
