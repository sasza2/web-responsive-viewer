import React, { useEffect, useMemo, useState } from 'react'
import PanZoom from 'react-easy-panzoom'
import Masonry from 'react-masonry-component'

import { PREDEFINED_PAGES } from 'consts'
import useActiveTab from 'hooks/useActiveTab'
import useViewport from 'hooks/useViewport'
import WelcomeScreen from '../../WelcomeScreen'
import Device from './Device'

import './Devices.sass'

const Devices = ({ devices, hidden, tab }) => {
  const activeTab = useActiveTab()
  const { width: viewportWidth } = useViewport()
  const [width, setWidth] = useState(viewportWidth)

  useEffect(() => {
    setWidth(viewportWidth)
  }, [viewportWidth])

  const onZoomChange = (panZoomState) => setWidth(viewportWidth / panZoomState.scale)

  const style = useMemo(() => {
    const styles = {}
    if (hidden) styles.display = 'none'
    return styles
  }, [hidden])

  const renderDevices = () => (
    <div className='devices' style={style}>
      <PanZoom onStateChange={onZoomChange}>
        <Masonry style={{ width }}>
          {
            devices.map(device => (
              <Device key={device.type} device={device.type} tab={tab} src={activeTab.url} />
            ))
          }
        </Masonry>
      </PanZoom>
    </div>
  )

  switch (activeTab.url) {
    case PREDEFINED_PAGES.WELCOME:
      return <WelcomeScreen />
    default:
      return renderDevices()
  }
}

export default Devices
