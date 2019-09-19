import React from 'react'

const WebView = ({ width, height }) => (
  <div style={{ margin: 5, border: '1px dashed #000'}}>
    <p>{width}x{height}</p>
    <div
      style={{ width, height }}
      dangerouslySetInnerHTML={{
        __html: '<webview style="width: 100%; height: 100%;" src="https://www.github.com/" disablewebsecurity></webview>'
      }}
    /> 
  </div>
)

export default WebView
