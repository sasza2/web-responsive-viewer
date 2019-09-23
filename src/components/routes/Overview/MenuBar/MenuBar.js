import React from 'react'

import Tabs from './Tabs'
import Search from './Search'

import './MenuBar.sass'

const MenuBar = () => (
  <div className='menu-bar'>
    <Tabs />
    <Search />
  </div>
)

export default MenuBar
