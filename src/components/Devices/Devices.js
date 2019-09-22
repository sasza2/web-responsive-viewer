import React, { useEffect, useState } from 'react';
import PanZoom from 'react-easy-panzoom'
import Masonry from 'react-masonry-component'

import useViewport from 'hooks/useViewport'
import Device, { TYPE } from './Device/Device';

import './Devices.sass'

const Devices = () => {
  const { width: viewportWidth } = useViewport()
  const [width, setWidth] = useState(viewportWidth)

  useEffect(() => {
    setWidth(viewportWidth)
  }, [viewportWidth])
  
  const onZoomChange = (panZoomState) => setWidth(viewportWidth / panZoomState.scale)

  return (
    <div className='devices'>
      <PanZoom onStateChange={onZoomChange}>
        <Masonry style={{ width }}>
          <Device device={TYPE.IPHONE_3GS} src='https://github.com' />
          <Device device={TYPE.IPHONE_4} src='https://github.com' />
          <Device device={TYPE.IPHONE_3GS} src='https://github.com' />
          <Device device={TYPE.IPHONE_3GS} src='https://github.com' />
          <Device device={TYPE.IPHONE_3GS} src='https://github.com' />
          <Device device={TYPE.IPHONE_3GS} src='https://github.com' />
        </Masonry>
      </PanZoom>
    </div>
  )
}

export default Devices
