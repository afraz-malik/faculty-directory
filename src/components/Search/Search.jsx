import React from 'react'
import SearchCss from './Search.module.scss'
const Search = () => {
  return (
    <div className={SearchCss.container}>
      <h2>Search your Faculty Member</h2>
      <div className={SearchCss.inside}>
        <div className={SearchCss.input}>
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="University" />
          <button> Search Faculty</button>
        </div>
      </div>
    </div>
  )
}

export default Search
