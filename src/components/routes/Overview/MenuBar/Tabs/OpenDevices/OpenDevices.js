import React from 'react'
import PropTypes from 'prop-types'

import './OpenDevices.sass'

const OpenDevices = ({ openDevices }) => (
  <span onClick={openDevices} className='tab-devices'>...</span>
)

OpenDevices.propTypes = {
  openDevices: PropTypes.func.isRequired,
}

export default OpenDevices
