import { combineReducers } from 'redux'

import { devicesReducer } from './devicesReducer'
import { tabsReducer } from './tabsReducer'

const createReducer = () => combineReducers({
  devices: devicesReducer,
  tabs: tabsReducer,
})

export default createReducer
