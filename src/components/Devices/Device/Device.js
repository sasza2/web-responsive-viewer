import React from 'react'

import WebView from 'components/WebView'

import './Device.sass'

const Device = ({ device, src }) => {
  return (
    <div className={`device device--${device.name}`}>
      <WebView src={src} width={device.width} height={device.height} />
    </div>
  )
}

export default Device
