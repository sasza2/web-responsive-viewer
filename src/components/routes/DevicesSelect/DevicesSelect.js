import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

import { DEVICE_TYPES } from 'consts'
import { StyledFormLabel, StyledFormControlLabel } from './styles'

const DevicesSelect = ({ devices }) => {
  const isChecked = useCallback(deviceName =>
    devices.findIndex(device => device.name === deviceName),
    [devices]
  )

  const onChange = (device) => () => {} // eslint-disable-line

  return (
    <FormControl component="fieldset">
      <StyledFormLabel component="legend">Select devices</StyledFormLabel>
      <FormGroup>
        {
          Object.keys(DEVICE_TYPES).map(deviceName => {
            const device = DEVICE_TYPES[deviceName]
            return (
              <StyledFormControlLabel
                key={device.name}
                control={<Checkbox checked={isChecked(device.name)} onChange={onChange(device)} />}
                label={`${device.name} ${device.width}x${device.height}px`}
              />
            )
          })
        }
      </FormGroup>
    </FormControl>
  )
}

DevicesSelect.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
}

export default DevicesSelect