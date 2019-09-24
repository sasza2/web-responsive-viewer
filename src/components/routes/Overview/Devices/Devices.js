import React, { useEffect, useMemo, useState } from 'react';
import PanZoom from 'react-easy-panzoom'
import Masonry from 'react-masonry-component'

import useViewport from 'hooks/useViewport'
import Device from './Device'

import './Devices.sass'

const Devices = ({ hidden, tab }) => {
  const { width: viewportWidth } = useViewport()
  const [width, setWidth] = useState(viewportWidth)

  useEffect(() => {
    setWidth(viewportWidth)
  }, [viewportWidth])
  
  const onZoomChange = (panZoomState) => setWidth(viewportWidth / panZoomState.scale)

  const style = useMemo(() => {
    const styles = {}
    if (hidden) styles['display'] = 'none'
    return styles
  }, [hidden])

  return (
    <div className='devices' style={style}>
      <PanZoom onStateChange={onZoomChange}>
        <Masonry style={{ width }}>
          {
            tab.devices.map(device => (
              <Device key={device.type} device={device.type} tab={tab} src='https://github.com' />
            ))
          }
        </Masonry>
      </PanZoom>
    </div>
  )
}

export default Devices
