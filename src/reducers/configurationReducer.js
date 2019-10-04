import cloneDeep from 'lodash/cloneDeep'

const UPDATE_CONFIGURATION = false

const initialState = {
  zoom: true,
}

export const updateConfiguration = (payload) => ({
  type: UPDATE_CONFIGURATION,
  payload,
})

export const configurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONFIGURATION: {
      return {
        ...cloneDeep(state),
        ...action.payload,
      }
    }
    default:
      return state
  }
}