export const DEVICES_CHECK = 'DEVICES_CHECK'

export const checkDevices = (action, payload) => ({
  type: DEVICES_CHECK,
  payload,
})

export const devicesReducer = (state = {}, action) => {
  switch(action.type){
    default:
      return state
  }
}
