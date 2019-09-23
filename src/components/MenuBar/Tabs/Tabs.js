import React from 'react'

import Tab from './Tab'

import './Tabs.sass'

const Tabs = ({ tabs }) => (
  <div className='tabs'>
    {
      tabs.list.map(tab => <Tab key={tab.id} active={tabs.selected === tab.id} tab={tab} />)
    }
  </div>
)

export default Tabs
