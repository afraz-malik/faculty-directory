import React from 'react'
import FormCss from './Form.module.css'
// Addons
// import update from 'react-addons-update'
// Redux
// import { updateUser, cancelUpdate, addUser } from '../../redux/action'
// import { connect } from 'react-redux'
// Components
import QualificationGen from './QualificationGen'
// import { Spinner } from '../spinner/spinner'

// const mapDispatchToProps = (dispatch) => ({
//   addUser: (user) => dispatch(addUser(user)),
//   updateUser: (user) => dispatch(updateUser(user)),
//   cancelUpdate: () => dispatch(cancelUpdate()),
// })
const initialQual = {
  q_id: '',
  institute_attended: '',
  degree_tittle: '',
  year_of_passing: '',
}
const initialState = {
  fm_name: '',
  fm_salary: '',
  fm_address: '',
  fm_designation: '',
  qualification: [initialQual],
  counter: 1,
  removedItem: [],
}
class Form extends React.Component {
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
  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }
  handleQual = (event, index) => {
    // if (!this.state.qualification[index].q_id && this.props.oldUser) {
    // this.setState(
    //   update(this.state, {
    //     qualification: {
    //       [index]: {
    //         $set: {
    //           ...this.state.qualification[index],
    //           [event.target.name]: event.target.value,
    //           q_id: String(
    //             parseInt(this.state.qualification[index - 1].q_id) + 1
    //           ),
    //         },
    //       },
    //     },
    //   })
    // )
    // } else {
    //   this.setState(
    //     update(this.state, {
    //       qualification: {
    //         [index]: {
    //           $set: {
    //             ...this.state.qualification[index],
    //             [event.target.name]: event.target.value,
    //           },
    //         },
    //       },
    //     })
    //   )
    // }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.oldUser
      ? this.props.updateUser(this.state)
      : this.props.addUser(this.state)
    console.log(this.props.success)
  }
  cancelUpdate = () => {
    if (this.props.oldUser) {
      this.props.cancelUpdate()
      this.props.toggleDatabase()
    } else {
      this.setState(initialState)
    }
  }
  addCounter = () => {
    // this.setState({ counter: this.state.counter + 1 })
    this.setState((prevState) => ({
      qualification: [...prevState.qualification, initialQual],
    }))
  }
  handleRemoved = (index, id) => {
    this.state.removedItem.push(id)
    console.log(this.state.removedItem)
    var array = [...this.state.qualification] // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1)
      this.setState({ qualification: array })
    }
  }
  render() {
    if (this.props.success) {
      this.props.toggleDatabase()
      this.setState(initialState)
    }
    return (
      <div className={FormCss.bigContainer}>
        <div className={FormCss.container}>
          <form method="post" onSubmit={this.handleSubmit}>
            <div className={FormCss.row}>
              <div className={FormCss.col50}>
                <h3>Personal Information</h3>
                <label htmlFor="name">
                  <i className="fa fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="fm_name"
                  placeholder="Your name here ..."
                  value={this.state.fm_name}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="address">
                  <i className="fa fa-address-card"></i> Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="fm_address"
                  placeholder="Your address here ..."
                  value={this.state.fm_address}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="designation">
                  <i className="fa fa-briefcase"></i> Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="fm_designation"
                  placeholder="Your designation here ..."
                  value={this.state.fm_designation}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="salary">
                  <i className="fa fa-usd"></i> Salary
                </label>
                <input
                  type="number"
                  id="salary"
                  name="fm_salary"
                  placeholder="PKR"
                  value={this.state.fm_salary}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className={`${FormCss.col50} ${FormCss.second}`}>
                <div className={FormCss.qualification}>
                  <h3>Qualification</h3>
                </div>

                {this.state.qualification.map((qual, j) => {
                  return (
                    <QualificationGen
                      key={j}
                      qual={qual}
                      handleRemoved={this.handleRemoved}
                      handleQual={this.handleQual}
                      index={j}
                    />
                  )
                })}
                <div className={FormCss.addmore}>
                  <span
                    className={FormCss.span}
                    style={{ color: 'lightgrey' }}
                    onClick={() => this.addCounter()}
                  >
                    &#65291;
                  </span>
                  <span
                    className={FormCss.span2}
                    onClick={() => this.addCounter()}
                  >
                    Add More
                  </span>
                  <hr
                    className={FormCss.hr}
                    onClick={() => this.addCounter()}
                  />
                </div>
              </div>
            </div>
            <label className={FormCss.lastlabel}>
              <input type="checkbox" name="sameadr" required />{' '}
              <span>
                I hereby verified the above information is correct and verified
                as per Terms & Conditions of Faculty Directory of Multi
                University
              </span>
            </label>
            <div className={FormCss.cancel}>
              <input
                type="submit"
                value={this.props.oldUser ? `Update` : `Save`}
                className={FormCss.btn}
              />
              <button
                className={FormCss.cancelbtn}
                type="button"
                onClick={() => this.cancelUpdate()}
              >
                {this.props.oldUser ? `Cancel` : `Clear All`}
              </button>
            </div>
          </form>
          {/* {this.props.isLoading ? <Spinner /> : null} */}
        </div>
      </div>
    )
  }
}

export default Form
