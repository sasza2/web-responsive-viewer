import { connect } from 'react-redux'

import { updateConfiguration } from 'reducers/configurationReducer'
import Other from './Other'

const mapStateToProps = state => ({
  configuration: state.configuration,
})

const mapDispatchToProps = {
  updateConfiguration,
}

export default connect(mapStateToProps, mapDispatchToProps)(Other)
