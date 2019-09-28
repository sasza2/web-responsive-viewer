import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'

import useActiveTab from 'hooks/useActiveTab'
import Tabs from './Tabs'
import Search from './Search'

import './MenuBar.sass'

const MenuBar = ({ devices }) => {
  const activeTab = useActiveTab()
  const progress = useMemo(() => Math.ceil(activeTab.loaded / devices.length * 100), [activeTab, devices])

  return (
    <div className='menu-bar'>
      <Tabs />
      <Search />
      { !activeTab.about && progress < 100 && <LinearProgress variant="determinate" value={progress} /> }
    </div>
  )
}

MenuBar.propTypes = {
  devices: PropTypes.arrayOf().isRequired,
}

export default MenuBar
