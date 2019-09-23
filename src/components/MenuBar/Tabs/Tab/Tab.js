import React from 'react'

import './Tab.sass'

const Tab = ({ active, tab }) => (
  <div className={`tab ${active ? 'active' : ''}`}>
    <div className='tab__in'>
      <span className='tab__name'>{tab.name}</span>
      <span className='close'>x</span>
    </div>
  </div>
)

export default Tab
