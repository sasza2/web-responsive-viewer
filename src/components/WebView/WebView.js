import React, { useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const WebView = ({ height, onLoad, src, width }) => {
  const [loading, setLoading] = useState(true)
  const webviewRef = useRef()

  useLayoutEffect(() => {
    if (loading) return null

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
      dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: `<webview style="width: 100%; height: 100%;" src="${src}" disablewebsecurity></webview>`
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
