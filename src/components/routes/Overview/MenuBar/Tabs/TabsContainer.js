import { connect } from 'react-redux'

import Tabs from './Tabs'

const mapStateToProps = state => ({
  tabs: state.tabs,
})

export default connect(mapStateToProps)(Tabs)
