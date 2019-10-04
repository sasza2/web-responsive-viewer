import React, { useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const WebView = ({ height, onLoad, src, width }) => {
  const [loading, setLoading] = useState(true)
  const webviewRef = useRef()

  const onLoadWrapper = () => {
    onLoad({ webviewRef: webviewRef.current })
    webviewRef.current.removeEventListener('dom-ready', onLoadWrapper)
  }

  useLayoutEffect(() => {
    if (loading) return

    webviewRef.current.addEventListener('dom-ready', onLoadWrapper)
    return () => webviewRef.current.removeEventListener('dom-ready', onLoadWrapper)
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
      dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        // TODO: preload="file:///home/sasza/Dokumenty/Projekty/web-responsive-viewer/app/preload.js"
        __html: `<webview preload="file:///home/sasza/Dokumenty/Projekty/web-responsive-viewer/app/preload.js" style="width: 100%; height: 100%;" src="${src}" disablewebsecurity></webview>`
      }}
    />
  )
}

WebView.propTypes = {
  height: PropTypes.number.isRequired,
  onLoad: PropTypes.func,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}

export default WebView
