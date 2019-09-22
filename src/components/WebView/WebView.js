import React from 'react'

const WebView = ({ height, src, width }) => (  
  <div
    style={{ width, height }}
    dangerouslySetInnerHTML={{
      __html: `<webview style="width: 100%; height: 100%;" src="${src}" disablewebsecurity></webview>`
    }}
  />
)

export default WebView
