import React from 'react'

import WebView from 'components/WebView'

import './Device.sass'

export const TYPE = {
  IPHONE_3GS: {
    name: 'iphone-3gs',
    width: 320,
    height: 480,
  },
  IPHONE_4: {
    name: 'iphone-4',
    width: 480,
    height: 960,
  },
  IPHONE_5: {
    name: 'iphone-5',
    width: 720,
    height: 1280,
  }
}

const Device = ({ device, src }) => {
  return (
    <div className={`device device--${device.name}`}>
      <WebView src={src} width={device.width} height={device.height} />
    </div>
  )
}

export default Device
