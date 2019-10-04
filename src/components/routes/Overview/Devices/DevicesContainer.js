import { connect } from 'react-redux'

import Devices from './Devices'

const mapStateToProps = state => ({
  configuration: state.configuration,
  devices: state.devices,
})

export default connect(mapStateToProps)(Devices)
