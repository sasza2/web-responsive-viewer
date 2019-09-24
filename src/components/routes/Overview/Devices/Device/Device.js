import React from 'react'

import WebView from 'components/WebView'

import './Device.sass'

const Device = ({ device, tab, updateDevice, src }) => {
  const onLoad = () => {
    updateDevice({
      deviceType: device.type,
      tabId: tab.id,
      device: {
        loaded: true,
      }
    })
  }

  return (
    <div className={`device device--${device.name}`}>
      <WebView src={src} width={device.width} height={device.height} onLoad={onLoad} />
    </div>
  )
}

export default Device
