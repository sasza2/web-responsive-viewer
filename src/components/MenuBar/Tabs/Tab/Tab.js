import React from 'react'

import './Tab.sass'

const Tab = ({ active }) => (
  <div className={`tab ${active ? 'active' : ''}`}>
    <div className='tab__in'>
      elo siemanderko xd
    </div>
  </div>
)

export default Tab
