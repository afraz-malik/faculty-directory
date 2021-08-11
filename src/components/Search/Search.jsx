import React from 'react'
import SearchCss from './Search.module.scss'
const Search = () => {
  return (
    <div className={SearchCss.container}>
      <h2>Search your Faculty Member</h2>
      <div className={SearchCss.inside}>
        <div className={SearchCss.row}>
          <input
            type="text"
            placeholder="Enter keywords... (name, university, department)"
          />
          <button className={SearchCss.filterbtn}> Filters </button>
          <button className={SearchCss.searchbtn}> Search Faculty</button>
        </div>
        <div className={SearchCss.filter}>
          {' '}
          <h3> Advance Search</h3>{' '}
          <div className={SearchCss.filters}>
            <select>
              <option>Value 1</option>
              <option>Value 1</option>
              <option>Value 1</option>
              <option>Value 1</option>
            </select>

            <select>
              <option>Value 1</option>
              <option>Value 1</option>
              <option>Value 1</option>
              <option>Value 1</option>
            </select>

            <select>
              <option>Value 1</option>
              <option>Value 1</option>
              <option>Value 1</option>
              <option>Value 1</option>
            </select>

            <select>
              <option>Value 1</option>
              <option>Value 1</option>
              <option>Value 1</option>
              <option>Value 1</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
