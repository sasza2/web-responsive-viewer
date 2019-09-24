import React, { useState, useEffect } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import useActiveTab from 'hooks/useActiveTab'
import Tabs from './Tabs'
import Search from './Search'

import './MenuBar.sass'

const PROGRESS = {
  MIN_VALUE: 5, // percent
  DISAPPEAR_AFTER: 500, // ms
}

const MenuBar = () => {
  const activeTab = useActiveTab()
  const calculateProgress = () => ({
    value: Math.max(
      Math.ceil(activeTab.devices.filter(device => device.loaded).length / activeTab.devices.length * 100),
      PROGRESS.MIN_VALUE
    ),
    visibility: true,
  })

  const [progress, setProgress] = useState(calculateProgress())

  useEffect(() => {
    setProgress(calculateProgress())
  }, [activeTab])

  useEffect(() =>{
    if(progress.value < 100) return

    const timer = setTimeout(() => {
      setProgress({
        value: 100,
        visibility: false,
      })
    }, PROGRESS.DISAPPEAR_AFTER)

    return () => clearTimeout(timer)
  }, [progress.value])

  console.log(progress.value)
  
  return (
    <div className='menu-bar'>
      <Tabs />
      <Search />
      { progress.visibility && <LinearProgress variant="determinate" value={progress.value} /> }
    </div>
  )
}

export default MenuBar
