import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

import { StyledFormLabel, StyledFormControlLabel } from '../styles'

const Other = ({ configuration, updateConfiguration }) => {
  const onChange = () => {
    updateConfiguration({
      zoom: !configuration.zoom,
    })
  }

  return (
    <FormControl component="fieldset">
      <StyledFormLabel component="legend">Other</StyledFormLabel>
      <FormGroup>
        <StyledFormControlLabel
          control={<Checkbox checked={configuration.zoom} onChange={onChange} />}
          label="Zoom"
        />
      </FormGroup>
    </FormControl>
  )
}

Other.propTypes = {
  configuration: PropTypes.shape({
    zoom: PropTypes.bool.isRequired,
  }).isRequired,
  updateConfiguration: PropTypes.func.isRequired,
}

export default Other
