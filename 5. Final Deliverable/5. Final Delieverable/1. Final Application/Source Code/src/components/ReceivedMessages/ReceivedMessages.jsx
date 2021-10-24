// import { render } from '@testing-library/react'
import React from 'react'
import ReceivedMessagesCss from './ReceivedMessages.module.scss'
import DataListGen from './DataListGen'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  messages: state.dataReducer.messages,
})
class ReceivedMessages extends React.Component {
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
  render() {
    const { title, messages } = this.props
    const { searchValue, pageNumber } = this.state
    const filteredData = messages.filter((data) => {
      return data.name.toLowerCase().includes(searchValue.toLowerCase())
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
      <div className={ReceivedMessagesCss.database}>
        <div className={ReceivedMessagesCss.top}>
          <div className={ReceivedMessagesCss.text}>
            <h3>Pending Faculty Requests</h3>
          </div>
          <div className={ReceivedMessagesCss.gear}>
            <img alt="" src="images/gear.svg" />
          </div>
        </div>
        <div className={ReceivedMessagesCss.action}>
          <div className={ReceivedMessagesCss.search}>
            <img alt="" src="images/search2.svg" />
            <input
              type="text"
              placeholder="Search for usernames, company..."
              onChange={this.handleChange}
              value={searchValue}
            />
          </div>
          <div className={ReceivedMessagesCss.filter}>
            <img alt="" src="images/filter.svg" />
            <h5>Filter</h5>
          </div>
          <div className={ReceivedMessagesCss.export}>
            <img alt="" src="images/export.svg" />
            <h5>Export</h5>
          </div>
        </div>
        <div className={ReceivedMessagesCss.table}>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>Subject</th>
                <th>Message</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((data, j) => (
                <DataListGen key={j} title={title} index={j} data={data} />
              ))}
            </tbody>
          </table>
        </div>
        <div className={ReceivedMessagesCss.pages}>
          <div
            className={ReceivedMessagesCss.back}
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
            className={ReceivedMessagesCss.front}
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
        className={ReceivedMessagesCss.numbers}
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
export default connect(mapStateToProps)(ReceivedMessages)
