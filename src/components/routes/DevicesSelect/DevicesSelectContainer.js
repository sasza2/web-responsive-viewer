import { connect } from 'react-redux'

import { updateDevices } from 'reducers/devicesReducer'
import DevicesSelect from './DevicesSelect'

const mapStateToProps = state => ({
  devices: state.devices,
})

const mapDispatchToProps = {
  updateDevices,
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicesSelect)
