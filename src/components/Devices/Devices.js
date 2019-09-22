import React from 'react';
import PanZoom from 'react-easy-panzoom'

import WebView from '../WebView'

import './Devices.sass'

const Devices = () => (
  <PanZoom>
    <div className='devices'>
      <WebView width={320} height={480} />
      <WebView width={360} height={740} />
      <WebView width={375} height={667} />
      <WebView width={480} height={853} />
      <WebView width={768} height={1024} />
    </div>
  </PanZoom>
)

export default Devices
