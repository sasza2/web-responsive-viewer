import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PanZoom from 'react-easy-panzoom'
import Masonry from 'react-masonry-component'

import { PREDEFINED_PAGES } from 'consts'
import useActiveTab from 'hooks/useActiveTab'
import useViewport from 'hooks/useViewport'
import WelcomeScreen from '../../WelcomeScreen'
import Configuration from '../../Configuration'
import Device from './Device'

import './Devices.sass'

const Devices = ({ configuration, devices, tab }) => {
  const activeTab = useActiveTab()
  const { width: viewportWidth } = useViewport()
  const [width, setWidth] = useState(viewportWidth)

  useEffect(() => {
    setWidth(viewportWidth)
  }, [viewportWidth])

  const onZoomChange = (panZoomState) => setWidth(viewportWidth / panZoomState.scale)

  const withPanZoom = (node) => {
    if (!configuration.zoom) return node
    return (
      <PanZoom onStateChange={onZoomChange}>
        {node}
      </PanZoom>
    )
  }

  const renderDevices = () => (
    <div className='devices'>
      {
        withPanZoom(
          <Masonry style={{ width }}>
            {
              devices.map(device => (
                <Device key={device.name} device={device} tab={tab} src={activeTab.url} />
              ))
            }
          </Masonry>
        )
      }
    </div>
  )

  switch (activeTab.url) {
    case PREDEFINED_PAGES.WELCOME:
      return <WelcomeScreen />
    case PREDEFINED_PAGES.DEVICES:
      return <Configuration />
    default:
      return renderDevices()
  }
}

Devices.propTypes = {
  configuration: PropTypes.shape({
    zoom: PropTypes.bool.isRequired,
  }),
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  tab: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
}

export default Devices
