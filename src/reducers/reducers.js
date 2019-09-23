import { combineReducers } from 'redux'

import { tabsReducer } from './tabsReducer'

const createReducer = () => combineReducers({
  tabs: tabsReducer,
})

export default createReducer
