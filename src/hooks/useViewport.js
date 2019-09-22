import { useEffect, useState } from 'react'

const useViewport = () => {
  const produceViewport = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [viewport, setViewport] = useState(produceViewport())

  useEffect(() => {
    const onResize = () => setViewport(produceViewport)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return viewport
}

export default useViewport
