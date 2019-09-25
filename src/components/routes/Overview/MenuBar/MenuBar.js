import React, { useCallback, useEffect, useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import get from 'lodash/get'

import useActiveTab from 'hooks/useActiveTab'
import Tabs from './Tabs'
import Search from './Search'

import './MenuBar.sass'

const PROGRESS = {
  DISAPPEAR_AFTER: 500, // ms
  MIN_FAKE_VALUE: 10, // percent
  RAND_FAKE_VALUE: 10, // percent
}

const MenuBar = () => {
  const activeTab = useActiveTab()
  const calculateProgress = useCallback(
    () => {
      if(!get(activeTab, 'devices.length')) return 100
      return Math.ceil(activeTab.devices.filter(device => device.loaded).length / activeTab.devices.length * 100)
    },
    [activeTab]
  )  
  const [progress, setProgress] = useState(calculateProgress())
  const [visibility, setVisibility] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const fakeProgressValue = Math.floor(PROGRESS.MIN_FAKE_VALUE + Math.random() * PROGRESS.RAND_FAKE_VALUE)
      if(fakeProgressValue > progress) setProgress(fakeProgressValue)
    }, 200)

    return () => clearTimeout(timer)
  }, [progress])

  useEffect(() =>{
    const nextProgress = calculateProgress()
    setProgress(nextProgress)
    if (nextProgress < 100) setVisibility(true)
  }, [activeTab])

  useEffect(() => {
    if (progress < 100) return

    const timer = setTimeout(() => {
      setVisibility(false)
    }, PROGRESS.DISAPPEAR_AFTER)

    return () => clearTimeout(timer)
  }, [progress])
  
  return (
    <div className='menu-bar'>
      <Tabs />
      <Search />
      { visibility && <LinearProgress variant="determinate" value={progress} /> }
    </div>
  )
}

export default MenuBar
