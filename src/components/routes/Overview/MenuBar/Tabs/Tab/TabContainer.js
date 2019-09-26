import { connect } from 'react-redux'

import { removeTab, selectTab } from 'reducers/tabsReducer'
import Tab from './Tab'

const mapDispatchToProps = ({
  removeTab,
  selectTab,
})

export default connect(null, mapDispatchToProps)(Tab)
