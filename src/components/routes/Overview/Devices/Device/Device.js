import React from 'react'
import PropTypes from 'prop-types'

import WebView from 'components/WebView'

import './Device.sass'

const Device = ({ device, src }) => {
  const onLoad = () => {
    
  }

  return (
    <div className={`device device--${device.name}`}>
      <WebView src={src} width={device.width} height={device.height} onLoad={onLoad} />
    </div>
  )
}

Device.propTypes = {
  device: PropTypes.shape({
    height: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  src: PropTypes.string.isRequired,
}

export default Device
