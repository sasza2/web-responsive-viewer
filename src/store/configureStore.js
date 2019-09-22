import { createStore } from 'redux'

import createReducer from '../reducers'

const configureStore = () => {
  const store = createStore(createReducer())
  return store
}

export default configureStore
