import { connect } from 'react-redux'

import Overview from './Overview'

const mapStateToProps = state => ({
  tabs: state.tabs,
})

export default connect(mapStateToProps)(Overview)
