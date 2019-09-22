import React from 'react'

import './Tab.sass'

const Tab = ({ active }) => (
  <div className={`tab ${active ? 'active' : ''}`}>
    <div className='tab__in'>
      <span className='tab__name'>Lorem ipsum dolor sit amet, consectetur</span>
      <span className='close'>x</span>
    </div>
  </div>
)

export default Tab
