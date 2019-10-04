import { combineReducers } from 'redux'

import { configurationReducer } from './configurationReducer'
import { devicesReducer } from './devicesReducer'
import { tabsReducer } from './tabsReducer'

const createReducer = () => combineReducers({
  configuration: configurationReducer,
  devices: devicesReducer,
  tabs: tabsReducer,
})

export default createReducer
