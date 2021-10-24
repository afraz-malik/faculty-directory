// import { render } from '@testing-library/react'
import React from 'react'
import DataBoxCss from './DataBox.module.scss'
import DataListGen from './DataListGen'
import { connect } from 'react-redux'
import {
  Success,
  Loading,
  facultySelectorList,
} from '../../redux/data/data.selectors'
import {
  clearSuccess,
  gettingFacultiesStart,
} from '../../redux/data/data.actions'
import { Spinner } from '../spinner/spinner'
const mapStateToProps = (state) => ({
  faculty: facultySelectorList(state),
  success: Success(state),
  loading: Loading(state),
})

const mapDisptachToProps = (dispatch) => ({
  clearSuccess: () => dispatch(clearSuccess()),
  gettingFacultiesStart: () => dispatch(gettingFacultiesStart()),
})
class DataBox extends React.Component {
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
    if (this.props.success) {
      this.props.clearSuccess()
      this.props.gettingFacultiesStart()
    }
    const { faculty } = this.props
    const { searchValue, pageNumber } = this.state
    const filteredData = faculty.filter((data) => {
      return data.personal.fm_name
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      // data.lname.toLowerCase().includes(searchValue.toLowerCase()) ||
      // data.company.toLowerCase().includes(searchValue.toLowerCase()) ||
      // data.email.toLowerCase().includes(searchValue.toLowerCase())
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
      <div className={DataBoxCss.database}>
        <div className={DataBoxCss.top}>
          <div className={DataBoxCss.text}>
            <h3>List of all Faculties</h3>
          </div>
          <div className={DataBoxCss.gear}>
            <img alt="" src="images/gear.svg" />
          </div>
        </div>
        <div className={DataBoxCss.action}>
          <div className={DataBoxCss.search}>
            <img alt="" src="images/search2.svg" />
            <input
              type="text"
              placeholder="Search for name, university, email..."
              onChange={this.handleChange}
              value={searchValue}
            />
          </div>
          <div className={DataBoxCss.filter}>
            <img alt="" src="images/filter.svg" />
            <h5>Filter</h5>
          </div>
          <div className={DataBoxCss.export}>
            <img alt="" src="images/export.svg" />
            <h5>Export</h5>
          </div>
        </div>
        <div className={DataBoxCss.table}>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PH #</th>
                <th>UNIVERSITY</th>
                <th>DEPARTMENT</th>
                <th>COURSE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((data, j) => (
                <DataListGen key={j} index={j} data={data} />
              ))}
            </tbody>
          </table>
        </div>
        <div className={DataBoxCss.pages}>
          <div
            className={DataBoxCss.back}
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
            className={DataBoxCss.front}
            onClick={() => this.handlePage('forward')}
          >
            &gt;
          </div>
        </div>
        {this.props.loading ? <Spinner /> : null}
      </div>
    )
  }
}
class NumberGen extends React.Component {
  render() {
    const { counter, handlePage, pageNumber } = this.props
    return (
      <div
        className={DataBoxCss.numbers}
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
export default connect(mapStateToProps, mapDisptachToProps)(DataBox)
