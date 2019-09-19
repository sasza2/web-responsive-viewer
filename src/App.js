import React, { Fragment } from 'react';

import WebView from 'components/WebView'

const App = () => (
  <div style={{ display: 'flex', 'align-items': 'flex-start', transform: 'scale(0.5)', 'transformOrigin': 'top left' }}>
    <WebView width={320} height={480} />
    <WebView width={360} height={740} />
    <WebView width={375} height={667} />
    <WebView width={480} height={853} />
    <WebView width={768} height={1024} />
  </div>
)

export default App
