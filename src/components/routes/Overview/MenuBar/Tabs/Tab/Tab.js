import React from 'react'
import PropTypes from 'prop-types'

import './Tab.sass'

const Tab = ({ active, removeTab, selectTab, tab }) => {
  const open = () => selectTab({ selected: tab.id })
  const close = (e) => {
    e.stopPropagation()
    removeTab({ tabId: tab.id })
  }

  return (
    <div onClick={open} className={`tab ${active ? 'tab--active' : ''}`}>
      <div className='tab__in'>
        <span className='tab__name'>{tab.name}</span>
        <span onClick={close} className='close'>x</span>
      </div>
    </div>
  )
}

Tab.propTypes = {
  active: PropTypes.bool,
  removeTab: PropTypes.func.isRequired,
  selectTab: PropTypes.func.isRequired,
  tab: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

Tab.defaultProps = {
  active: false,
}

export default Tab
