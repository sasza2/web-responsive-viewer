import { connect } from 'react-redux'

import MenuBar from './MenuBar'

const mapStateToProps = state => ({
  tabs: state.tabs,
})

export default connect(mapStateToProps)(MenuBar)
