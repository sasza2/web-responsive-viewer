import React, { useLayoutEffect, useRef } from 'react'

const WebView = ({ height, src, width }) => {
  const webviewParentRef = useRef()

  useLayoutEffect(() => {
    if (!webviewParentRef.current) return
    console.log('elo')
  }, [])

  console.log(webviewParentRef.current)

  return (
    <div
      ref={webviewParentRef}
      style={{ width, height }}
      dangerouslySetInnerHTML={{
        __html: `<webview style="width: 100%; height: 100%;" src="${src}" disablewebsecurity></webview>`
      }}
    />
  )
}

export default WebView
