import React, { Fragment } from 'react'

import MenuBar from './MenuBar'
import Devices from './Devices'

const Overview = ({ tabs }) => (
  <Fragment>
    <MenuBar />
    {console.log(tabs.selected, tabs.list[0].id)}
    {
      tabs.list.map(tab => <Devices key={tab.id} hidden={tab.id !== tabs.selected} tab={tab} />)
    }
  </Fragment>
)

export default Overview
