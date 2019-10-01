import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import WebView from 'components/WebView'

import './Device.sass'

const Device = ({ device, src, tab, updateTabLoader }) => {
  const hasLoadedRef = useRef()

  const onLoad = ({ webviewRef }) => {
    if (hasLoadedRef.current) return
    hasLoadedRef.current = true
    updateTabLoader({
      tabId: tab.id,
    })
    webviewRef.executeJavaScript(`window.webDeviceId = '${tab.id}-${device.name}';`)
  }

  return (
    <div className={`device device--${device.name}`}
     style={{
        backgroundImage: `url(${device.mockupUrl})`,
        paddingTop: device.frameSizes.top,
        paddingRight: device.frameSizes.leftRight,
        paddingBottom: device.frameSizes.bottom,
        paddingLeft: device.frameSizes.leftRight,
        }
      }>
      <WebView src={src} width={device.width} height={device.height} onLoad={onLoad} />
    </div>
  )
}

Device.propTypes = {
  device: PropTypes.shape({
    frameSizes: PropTypes.object.isRequired,
    height: PropTypes.number.isRequired,
    mockupUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  src: PropTypes.string.isRequired,
  tab: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  updateTabLoader: PropTypes.func.isRequired,
}

export default Device
