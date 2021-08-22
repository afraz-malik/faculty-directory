import React from 'react'
import FormCss from './Form.module.css'
const initialState = {
  fm_name: '',
  fm_email: '',
  fm_phone: '',
  fm_gender: 1,
  fm_dob: '',
  imgurl: 'images/authors/9.png',
  images: [],
}

class Form1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state)
    this.props.collectData({ personal: this.state })
    this.props.incState()
  }
  handleImage = (event) => {
    console.log(event.target.files.length)
    this.setState({
      ...this.state,
      imgurl:
        event.target.files.length > 0
          ? URL.createObjectURL(event.target.files[0])
          : this.state.imgurl,
      images: event.target.files[0],
    })
  }
  render() {
    if (this.props.success) {
      this.props.toggleDatabase()
      this.setState(initialState)
    }
    return (
      <div className={FormCss.container}>
        <form method="post" onSubmit={this.handleSubmit}>
          <h3>Personal Information</h3>
          <div className={FormCss.row}>
            <div className={FormCss.col50}>
              <div className={FormCss.insidecol}>
                <div className={FormCss.insidecol1}>
                  <label htmlFor="fm_name">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fm_name"
                    name="fm_name"
                    placeholder="Enter Your Name"
                    value={this.state.fm_name}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="salary">
                    <i className="far fa-envelope"></i> Email
                  </label>
                  <input
                    type="email"
                    id="fm_email"
                    name="fm_email"
                    placeholder="Enter Your Email"
                    value={this.state.fm_email}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="fm_phone">
                    <i className="far fa-phone"></i> Phone Number
                  </label>
                  <input
                    type="text"
                    id="fm_phone"
                    name="fm_phone"
                    placeholder="Enter Your Phone Number"
                    value={this.state.fm_phone}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className={FormCss.insidecol2}>
                  <div className={FormCss.img}>
                    <img alt="" src={this.state.imgurl} />
                    <div className={FormCss.imghover}>
                      <label
                        htmlFor="file-upload"
                        className={FormCss.customImg}
                      >
                        <i className="fas fa-camera"></i>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        name="img"
                        onChange={this.handleImage}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '52%' }}>
                  <label htmlFor="fm_dob">
                    <i className="fa fa-user"></i> DOB
                  </label>
                  <input
                    type="date"
                    id="fm_dob"
                    name="fm_dob"
                    placeholder="Enter Your Name"
                    value={this.state.fm_dob}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div style={{ width: '40%' }}>
                  <label htmlFor="fm_gender">
                    <i className="fa fa-user"></i> Gender
                  </label>
                  <select
                    name="fm_gender"
                    id="fm_gender"
                    // value={this.state.fm_gender}
                    onChange={this.handleChange}
                    required
                  >
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </select>
                </div>
              </div>
            </div>
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
