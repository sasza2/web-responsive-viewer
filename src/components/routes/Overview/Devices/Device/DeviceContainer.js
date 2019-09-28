import { connect } from 'react-redux'

import { updateTabLoader } from 'reducers/tabsReducer'
import Device from './Device'

const mapDispatchToProps = {
  updateTabLoader,
}

export default connect(null, mapDispatchToProps)(Device)
