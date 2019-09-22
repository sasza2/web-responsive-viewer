import React, { useMemo } from 'react'

import WebView from 'components/WebView'

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
