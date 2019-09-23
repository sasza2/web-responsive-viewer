import React from 'react'

import './Search.sass'

const Search = ({ tabs, updateTabs }) => {
  console.log(tabs)
  console.log(updateTabs)

  const keyUp = (e) => {
    if (e.keyCode === 13) updateTabs({ elo: 'xd' })
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
