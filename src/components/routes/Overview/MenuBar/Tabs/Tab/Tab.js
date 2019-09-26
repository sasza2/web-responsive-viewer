import React from 'react'
import PropTypes from 'prop-types'

import './Tab.sass'

const Tab = ({ active, tab }) => (
  <div className={`tab ${active ? 'active' : ''}`}>
    <div className='tab__in'>
      <span className='tab__name'>{tab.name}</span>
      <span className='close'>x</span>
    </div>
  </div>
)

Tab.propTypes = {
  active: PropTypes.bool,
  tab: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
}

Tab.defaultProps = {
  active: false,
}

export default Tab
