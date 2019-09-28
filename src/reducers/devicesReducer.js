import cloneDeep from 'lodash/cloneDeep'

import { DEVICE_TYPES } from 'consts'

export const DEVICES_UPDATE = 'DEVICES_UPDATE'

export const updateDevices = (payload) => ({
  type: DEVICES_UPDATE,
  payload,
})

const initialState = [
  DEVICE_TYPES.DEVICE_1,
  DEVICE_TYPES.DEVICE_2,
]

const findDeviceIndexByName = (devices, deviceName) => devices.findIndex(device => device.name === deviceName)

export const devicesReducer = (state = initialState, action) => {
  switch(action.type){
    case DEVICES_UPDATE: {
      const nextDevices = cloneDeep(state)
      const { device } = action.payload
      const deviceIndex = findDeviceIndexByName(nextDevices, device.name)
      // Device already checked, should remove
      if (deviceIndex >= 0){
        nextDevices.splice(deviceIndex, 1)
      } else {
        nextDevices.push(device)
      }
      return nextDevices
    }
    default:
      return state
  }
}
