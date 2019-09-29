import React, { useEffect, useState } from 'react'
import PanZoom from 'react-easy-panzoom'
import Masonry from 'react-masonry-component'

import { PREDEFINED_PAGES } from 'consts'
import useActiveTab from 'hooks/useActiveTab'
import useViewport from 'hooks/useViewport'
import WelcomeScreen from '../../WelcomeScreen'
import DevicesSelect from '../../DevicesSelect'
import Device from './Device'

import './Devices.sass'

const Devices = ({ devices, tab }) => {
  const activeTab = useActiveTab()
  const { width: viewportWidth } = useViewport()
  const [width, setWidth] = useState(viewportWidth)

  useEffect(() => {
    setWidth(viewportWidth)
  }, [viewportWidth])

  const onZoomChange = (panZoomState) => setWidth(viewportWidth / panZoomState.scale)

  const renderDevices = () => (
    <div className='devices'>
      <PanZoom onStateChange={onZoomChange}>
        <Masonry style={{ width }}>
          {
            devices.map(device => (
              <Device key={device.name} device={device} tab={tab} src={activeTab.url} />
            ))
          }
        </Masonry>
      </PanZoom>
    </div>
  )

  switch (activeTab.url) {
    case PREDEFINED_PAGES.WELCOME:
      return <WelcomeScreen />
    case PREDEFINED_PAGES.DEVICES:
      return <DevicesSelect />
    default:
      return renderDevices()
  }
}

export default Devices
