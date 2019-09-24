import { useSelector } from 'react-redux'

import { findActiveTab } from 'reducers/tabsReducer'

const useActiveTab = () => {
  const tabs = useSelector(state => state.tabs)
  return findActiveTab(tabs)
}

export default useActiveTab
