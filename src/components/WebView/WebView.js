import React, { useLayoutEffect, useRef, useState } from 'react'

const WebView = ({ height, onLoad, src, width }) => {
  const [loading, setLoading] = useState(true)
  const webviewRef = useRef()

  useLayoutEffect(() => {
    if (loading) return
    webviewRef.current.addEventListener('did-stop-loading', onLoad)
    return () => webviewRef.current.removeEventListener('did-stop-loading', onLoad)
  }, [loading, onLoad])

  const onMount = (node) => {
    if (!node) return

    webviewRef.current = node.firstChild
    setLoading(false)
  }

  return (
    <div
      ref={onMount}
      style={{ width, height }}
      dangerouslySetInnerHTML={{
        __html: `<webview style="width: 100%; height: 100%;" src="${src}" disablewebsecurity></webview>`
      }}
    />
  )
}

export default WebView
