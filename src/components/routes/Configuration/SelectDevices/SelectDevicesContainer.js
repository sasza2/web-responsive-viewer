import { connect } from 'react-redux'

import { updateDevices } from 'reducers/devicesReducer'
import SelectDevices from './SelectDevices'

const mapStateToProps = state => ({
  devices: state.devices,
})

const mapDispatchToProps = {
  updateDevices,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectDevices)
