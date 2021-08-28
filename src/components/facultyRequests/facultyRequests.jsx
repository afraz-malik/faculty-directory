// import { render } from '@testing-library/react'
import React from 'react'
import FacultyRequestsCss from './FacultyRequests.module.scss'
import DataListGen from './DataListGen'
import { connect } from 'react-redux'

// Components
const mapStateToProps = (state) => ({
  users: state.userReducer.users,
})

class FacultyRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      pageNumber: 1,
    }
  }
  totalPages = 1
  handlePage = (value) => {
    if (value === 'back') {
      if (this.state.pageNumber !== 1) {
        this.setState({ ...this.state, pageNumber: this.state.pageNumber - 1 })
      }
      return
    }
    if (value === 'forward') {
      if (this.state.pageNumber < this.totalPages) {
        this.setState({ ...this.state, pageNumber: this.state.pageNumber + 1 })
      }
      return
    }
    this.setState({ ...this.state, pageNumber: value })
  }
  handleChange = (event) => {
    this.setState({ ...this.state, searchValue: event.target.value })
  }
  paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }
  filteredData = () => {}
  render() {
    const { users } = this.props
    const pendingUsers = users.filter((user) => user.approve === false)
    const { title } = this.props
    const { searchValue, pageNumber } = this.state
    const filteredData = pendingUsers.filter((data) => {
      return data
    })
    if (this.state.pageNumber > this.totalPages)
      this.setState({ ...this.state, pageNumber: 1 })
    if (filteredData.length === 0) {
      this.totalPages = 1
    } else {
      this.totalPages = Math.ceil(filteredData.length / 5)
    }
    const currentPageData = this.paginate(filteredData, 5, pageNumber)

    return (
      <div className={FacultyRequestsCss.database}>
        <div className={FacultyRequestsCss.top}>
          <div className={FacultyRequestsCss.text}>
            <h3>Pending Faculty Requests</h3>
          </div>
          <div className={FacultyRequestsCss.gear}>
            <img alt="" src="images/gear.svg" />
          </div>
        </div>
        <div className={FacultyRequestsCss.action}>
          <div className={FacultyRequestsCss.search}>
            <img alt="" src="images/search2.svg" />
            <input
              type="text"
              placeholder="Search for usernames, company..."
              onChange={this.handleChange}
              value={searchValue}
            />
          </div>
          <div className={FacultyRequestsCss.filter}>
            <img alt="" src="images/filter.svg" />
            <h5>Filter</h5>
          </div>
          <div className={FacultyRequestsCss.export}>
            <img alt="" src="images/export.svg" />
            <h5>Export</h5>
          </div>
        </div>
        <div className={FacultyRequestsCss.table}>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>UNIVERSITY</th>
                <th>EMAIL</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((data, j) => (
                <DataListGen key={j} title={title} index={j} data={data} />
              ))}
            </tbody>
          </table>
        </div>
        <div className={FacultyRequestsCss.pages}>
          <div
            className={FacultyRequestsCss.back}
            onClick={() => this.handlePage('back')}
          >
            &lt;
          </div>
          {[...Array(this.totalPages)].map((i, j) => (
            <NumberGen
              key={j}
              counter={j + 1}
              handlePage={this.handlePage}
              pageNumber={pageNumber}
            />
          ))}
          <div
            className={FacultyRequestsCss.front}
            onClick={() => this.handlePage('forward')}
          >
            &gt;
          </div>
        </div>
      </div>
    )
  }
}
class NumberGen extends React.Component {
  render() {
    const { counter, handlePage, pageNumber } = this.props
    return (
      <div
        className={FacultyRequestsCss.numbers}
        onClick={() => handlePage(counter)}
        style={
          counter === pageNumber
            ? { background: ' #e14eca', color: 'white' }
            : null
        }
      >
        {counter}
      </div>
    )
  }
}
export default connect(mapStateToProps)(FacultyRequests)
