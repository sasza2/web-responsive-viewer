import { connect } from 'react-redux'

import { updateTabs } from 'reducers/tabsReducer'
import Search from './Search'

const mapStateToProps = state => ({
  tabs: state.tabs,
})

const mapDispatchToProps = {
  updateTabs,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
