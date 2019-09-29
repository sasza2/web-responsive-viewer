import React from 'react'

import useActiveTab from 'hooks/useActiveTab'
import MenuBar from './MenuBar'
import Devices from './Devices'

const Overview = () => {
  const activeTab = useActiveTab()
  return (
    <>
      <MenuBar />
      <Devices tab={activeTab} />
    </>
  )
}

export default Overview
