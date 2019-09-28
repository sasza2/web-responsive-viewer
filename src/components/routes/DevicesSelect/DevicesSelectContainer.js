import { connect } from 'react-redux'

import DevicesSelect from './DevicesSelect'

const mapStateToProps = state => ({
  devices: state.devices,
})

export default connect(mapStateToProps)(DevicesSelect)
