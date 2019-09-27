export const DEVICES_CHECK = 'DEVICES_CHECK'

export const checkDevices = (action, payload) => ({
  type: DEVICES_CHECK,
  payload,
})

const initialState = []

export const devicesReducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state
  }
}
