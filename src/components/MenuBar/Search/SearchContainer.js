import { connect } from 'react-redux'

import { updateActiveTab } from 'reducers/tabsReducer'
import Search from './Search'

const mapDispatchToProps = {
  updateActiveTab,
}

export default connect(null, mapDispatchToProps)(Search)
