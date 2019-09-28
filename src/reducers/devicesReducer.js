import { DEVICE_TYPES } from 'consts'

export const DEVICES_CHECK = 'DEVICES_CHECK'

export const checkDevices = (action, payload) => ({
  type: DEVICES_CHECK,
  payload,
})

const initialState = [
  DEVICE_TYPES.DEVICE_1,
  DEVICE_TYPES.DEVICE_2,
]

export const devicesReducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state
  }
}
