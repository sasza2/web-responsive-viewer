import React from 'react'

import './Search.sass'

const Search = ({ updateActiveTab }) => {
  const keyUp = (e) => {
    if (e.keyCode === 13) updateActiveTab({ url: e.target.value })
  }

  return (
    <div className='search'>
      <div className='search__input'>
        <input type='text' onKeyUp={keyUp} />
      </div>
    </div>
  )
}

export default Search
