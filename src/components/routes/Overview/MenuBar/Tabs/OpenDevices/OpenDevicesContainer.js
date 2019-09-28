import { connect } from 'react-redux'

import { openDevices } from 'reducers/tabsReducer'
import OpenDevices from './OpenDevices'

const mapDispatchToProps = {
  openDevices,
}

export default connect(null, mapDispatchToProps)(OpenDevices)
