import React from 'react'
import { withRouter } from 'react-router-dom'
import FormCss from './Form.module.css'

const initialState = {
  fm_university: '',
  fm_designation: '',
  fm_department: '',
  fm_courses: '',
  fm_experties: '',
  fm_interests: '',
  fm_country: '',
  fm_city: '',
}
class Form1 extends React.Component {
  constructor(props) {
    super(props)
    // if (this.props.oldUser) {
    //   this.state = {
    //     ...this.props.oldUser,
    //     counter: this.props.oldUser.qualification.length,
    //     removedItem: [],
    //   }
    // } else {
    // }
    this.state = initialState
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    // this.props.oldUser
    //   ? this.props.updateUser(this.state)
    //   : this.props.addUser(this.state)
    // console.log(this.state)
    await this.props.collectData({ faculty: this.state })
    const result = await window.confirm(
      'Are you sure you have verified all record and want to proceed? (Strict Action will be taken against false information)'
    )
    if (result) {
      this.props.submitForm()
      alert('Saved Sucessfully')
      this.props.history.push('/faculty')
    }
    // console.log(this.props.history.push('/dashboard'))
  }

  render() {
    if (this.props.success) {
      this.props.toggleDatabase()
      this.setState(initialState)
    }
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
              <input
                type="text"
                id="fm_courses"
                name="fm_courses"
                placeholder="Type your courses"
                value={this.state.fm_courses}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="fm_experties">
                <i className="far fa-file-export"></i> Area of Experties
              </label>
              <input
                type="text"
                id="fm_experties"
                name="fm_experties"
                placeholder="Tag your experties"
                value={this.state.fm_experties}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="fm_interests">
                <i className="fas fa-user-tie"></i> Professional Interests
              </label>
              <input
                type="text"
                id="fm_interests"
                name="fm_interests"
                placeholder="Type your professional interests"
                value={this.state.fm_interests}
                onChange={this.handleChange}
                required
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
