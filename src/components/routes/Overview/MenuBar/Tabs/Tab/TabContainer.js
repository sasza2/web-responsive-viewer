import { connect } from 'react-redux'

import { selectTab } from 'reducers/tabsReducer'
import Tab from './Tab'

const mapDispatchToProps = ({
  selectTab,
})

export default connect(null, mapDispatchToProps)(Tab)
