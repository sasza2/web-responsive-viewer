import { connect } from 'react-redux'

import { updateDevice } from 'reducers/tabsReducer'
import Device from './Device'

const mapDispatchToProps = {
  updateDevice,
}

export default connect(null, mapDispatchToProps)(Device)
