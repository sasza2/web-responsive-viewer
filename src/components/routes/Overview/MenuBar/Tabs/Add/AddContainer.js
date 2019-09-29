import { connect } from 'react-redux'

import { addEmptyTab } from 'reducers/tabsReducer'
import Add from './Add'

const mapDispatchToProps = {
  addEmptyTab,
}

export default connect(null, mapDispatchToProps)(Add)
