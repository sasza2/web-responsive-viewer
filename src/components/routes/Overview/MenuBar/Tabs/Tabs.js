import React from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'
import Add from './Add'
import OpenDevices from './OpenDevices'

import './Tabs.sass'

const Tabs = ({ tabs }) => (
  <div className='tabs'>
    {
      tabs.list.map(tab => <Tab key={tab.id} active={tabs.selected === tab.id} tab={tab} />)
    }
    <Add />
    <OpenDevices />
  </div>
)

Tabs.propTypes = {
  tabs: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })),
    selected: PropTypes.number.isRequired,
  })
}

export default Tabs
