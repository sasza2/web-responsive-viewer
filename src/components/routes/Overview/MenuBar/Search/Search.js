import React, { useState } from 'react'

import useActiveTab from 'hooks/useActiveTab'

import './Search.sass'

const Search = ({ updateUrlTab }) => {
  const activeTab = useActiveTab()
  const [search, setSearch] = useState(activeTab.url)

  const keyUp = (e) => {
    if (e.keyCode === 13) updateUrlTab({ url: e.target.value })
  }

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='search'>
      <div className='search__input'>
        <input type='text' onChange={onChange} onKeyUp={keyUp} value={search} />
      </div>
    </div>
  )
}

export default Search
