import { connect } from 'react-redux'

import { updateUrlTab } from 'reducers/tabsReducer'
import Search from './Search'

const mapDispatchToProps = {
  updateUrlTab,
}

export default connect(null, mapDispatchToProps)(Search)
