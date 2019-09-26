import React from 'react'
import PropTypes from 'prop-types'

import MenuBar from './MenuBar'
import Devices from './Devices'

const Overview = ({ tabs }) => (
  <>
    <MenuBar />
    {
      tabs.list.map(tab => <Devices key={tab.id} hidden={tab.id !== tabs.selected} tab={tab} />)
    }
  </>
)

Overview.propTypes = {
  tabs: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
    selected: PropTypes.number.isRequired,
  }).isRequired,
}

export default Overview
