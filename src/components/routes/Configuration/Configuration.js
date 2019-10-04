import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

import { DEVICE_TYPES } from 'consts'
import { StyledFormLabel, StyledFormControlLabel } from './styles'

const Configuration = ({ devices, updateDevices }) => {
  const isChecked = useCallback(deviceName =>
    devices.findIndex(device => device.name === deviceName) >= 0,
    [devices]
  )

  const onChange = (device) => () => updateDevices({ device })

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

Configuration.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  updateDevices: PropTypes.func.isRequired,
}

export default Configuration
