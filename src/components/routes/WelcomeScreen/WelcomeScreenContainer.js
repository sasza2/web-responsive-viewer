import { connect } from 'react-redux'

import { updateUrlTab } from 'reducers/tabsReducer'
import WelcomeScreen from './WelcomeScreen'

const mapDispatchToProps = {
  updateUrlTab,
}

export default connect(null, mapDispatchToProps)(WelcomeScreen)
