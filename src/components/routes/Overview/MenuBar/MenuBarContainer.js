import { connect } from 'react-redux'

import MenuBar from './MenuBar'

const mapStateToProps = state => ({
  devices: state.devices,
})

export default connect(mapStateToProps)(MenuBar)
