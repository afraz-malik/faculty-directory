// import { render } from '@testing-library/react'
import React from 'react'
import facultyRequestsCss from './facultyRequests.module.scss'
import DataListGen from './DataListGen'

// Components
const initialUserState = {
  clients: [
    {
      fname: '1Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      company: 'Binford Ltd.',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '2Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      company: 'Biffco Enterprises Ltd.',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '3Jacob',
      lname: 'Jones',
      email: 'dolores.chambers@example.com',
      company: 'Acme Co.',
      phone: '(208) 555-0112',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '4Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      company: 'Binford Ltd.',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '5Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      company: 'Biffco Enterprises Ltd.',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '6Jacob',
      lname: 'Jones',
      email: 'dolores.chambers@example.com',
      company: 'Acme Co.',
      phone: '(208) 555-0112',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '7&Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      company: 'Binford Ltd.',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '82Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      company: 'Biffco Enterprises Ltd.',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '93Jacob',
      lname: 'Jones',
      email: 'dolores.chambers@example.com',
      company: 'Acme Co.',
      phone: '(208) 555-0112',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '104Esther',
      lname: 'Howard',
      email: 'jessica.hansaon@example.com',
      company: 'Binford Ltd.',
      phone: '(505)555-0125',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '115Theresa',
      lname: 'Webb',
      email: 'michelle.rivera@example.com',
      company: 'Biffco Enterprises Ltd.',
      phone: '(217) 555-0113',
      roles: 'Admin',
      password: '',
    },
    {
      fname: '126Jacob',
      lname: 'Jones',
      email: 'dolores.chambers@example.com',
      company: 'Acme Co.',
      phone: '(208) 555-0112',
      roles: 'Admin',
      password: '',
    },
  ],
}
class facultyRequests extends React.Component {
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
    const { title } = this.props
    const { searchValue, pageNumber } = this.state
    const filteredData = initialUserState.clients.filter((data) => {
      return (
        data.fname.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.lname.toLowerCase().includes(searchValue.toLowerCase()) ||
        // data.company.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.email.toLowerCase().includes(searchValue.toLowerCase())
      )
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
      <div className={facultyRequestsCss.database}>
        <div className={facultyRequestsCss.top}>
          <div className={facultyRequestsCss.text}>
            <h3>Pending Faculty Requests</h3>
          </div>
          <div className={facultyRequestsCss.gear}>
            <img alt="" src="images/gear.svg" />
          </div>
        </div>
        <div className={facultyRequestsCss.action}>
          <div className={facultyRequestsCss.search}>
            <img alt="" src="images/search2.svg" />
            <input
              type="text"
              placeholder="Search for usernames, company..."
              onChange={this.handleChange}
              value={searchValue}
            />
          </div>
          <div className={facultyRequestsCss.filter}>
            <img alt="" src="images/filter.svg" />
            <h5>Filter</h5>
          </div>
          <div className={facultyRequestsCss.export}>
            <img alt="" src="images/export.svg" />
            <h5>Export</h5>
          </div>
        </div>
        <div className={facultyRequestsCss.table}>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>UNIVERSITY</th>
                <th>PHONE NUMBER</th>
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
        <div className={facultyRequestsCss.pages}>
          <div
            className={facultyRequestsCss.back}
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
            className={facultyRequestsCss.front}
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
        className={facultyRequestsCss.numbers}
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
export default facultyRequests
