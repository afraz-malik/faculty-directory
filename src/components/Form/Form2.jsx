import React from 'react'
import FormCss from './Form.module.css'
import QualificationGen from './QualificationGen'
import update from 'react-addons-update'
const initialQual = {
  q_id: '',
  institute_attended: '',
  degree_tittle: '',
  year_of_passing: '',
}
const initialState = {
  qualification: [initialQual],
  counter: 1,
  removedItem: [],
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
  handleQual = (event, index) => {
    if (!this.state.qualification[index].q_id && this.props.oldUser) {
      this.setState(
        update(this.state, {
          qualification: {
            [index]: {
              $set: {
                ...this.state.qualification[index],
                [event.target.name]: event.target.value,
                q_id: String(
                  parseInt(this.state.qualification[index - 1].q_id) + 1
                ),
              },
            },
          },
        })
      )
    } else {
      this.setState(
        update(this.state, {
          qualification: {
            [index]: {
              $set: {
                ...this.state.qualification[index],
                [event.target.name]: event.target.value,
              },
            },
          },
        })
      )
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.oldUser
    //   ? this.props.updateUser(this.state)
    //   : this.props.addUser(this.state)
    this.props.collectData({ qualification: this.state.qualification })
    this.props.incState()
  }
  addCounter = () => {
    // this.setState({ counter: this.state.counter + 1 })
    this.setState((prevState) => ({
      qualification: [...prevState.qualification, initialQual],
    }))
  }
  handleRemoved = (index, id) => {
    this.state.removedItem.push(id)
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
      <div className={FormCss.container}>
        <form method="post" onSubmit={this.handleSubmit}>
          <h3>Qualification</h3>
          <div className={FormCss.row}>
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
          </div>
          <div className={FormCss.addmore}>
            <span
              className={FormCss.span}
              style={{ color: 'lightgrey' }}
              onClick={() => this.addCounter()}
            >
              &#65291;
            </span>
            <span className={FormCss.span2} onClick={() => this.addCounter()}>
              Add More
            </span>
            <hr className={FormCss.hr} onClick={() => this.addCounter()} />
          </div>

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

export default Form1
