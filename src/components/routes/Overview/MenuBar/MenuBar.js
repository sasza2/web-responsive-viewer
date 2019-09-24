import React from 'react'

import useActiveTab from 'hooks/useActiveTab'
import Tabs from './Tabs'
import Search from './Search'

import './MenuBar.sass'

const MenuBar = ({ tabs }) => {
  const activeTab = useActiveTab()
  console.log(activeTab)
  return (
    <div className='menu-bar'>
      <Tabs />
      <Search />
    </div>
  )
}

export default MenuBar
