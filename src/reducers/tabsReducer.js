import assign from 'lodash/assign'
import cloneDeep from 'lodash/cloneDeep'

import { PREDEFINED_PAGES } from 'consts'

export const TAB_ADD = 'TAB_ADD'
export const TAB_REMOVE = 'TAB_REMOVE'
export const TAB_ADD_EMPTY = 'TAB_ADD_EMPTY'
export const TAB_UPDATE_ACTIVE = 'TAB_UPDATE_ACTIVE'
export const TAB_UPDATE_URL = 'TAB_UPDATE_URL'
export const TAB_SELECT = 'TAB_SELECT'

let TAB_LAST_ID = 0

export const addEmptyTab = () => ({
  type: TAB_ADD_EMPTY,
})

export const removeTab = (payload) => ({
  type: TAB_REMOVE,
  payload,
})

export const updateTabs = (payload) => ({
  type: TAB_ADD,
  payload,
})

export const updateActiveTab = (payload) => ({
  type: TAB_UPDATE_ACTIVE,
  payload,
})

export const updateUrlTab = (payload) => ({
  type: TAB_UPDATE_URL,
  payload,
})

export const selectTab = (payload) => ({
  type: TAB_SELECT,
  payload,
})

const initialState = {
  list: [
    {
      id: TAB_LAST_ID,
      name: 'New cart', // TODO: add translation
      url: PREDEFINED_PAGES.WELCOME,
    },
  ],
  selected: 0,
}

export const findActiveTab = (tabs) => tabs.list.find(tab => tab.id === tabs.selected)

const findTabIndexById = (tabs, tabId) => tabs.list.findIndex(tab => tab.id === tabId)

export const tabsReducer = (state = initialState, action) => {
  switch(action.type){
    case TAB_ADD:
      return action.payload
    case TAB_ADD_EMPTY: {
      const nextTabs = cloneDeep(state)
      TAB_LAST_ID += 1
      nextTabs.list.push({
        id: TAB_LAST_ID,
        name: 'New cart',
        devices: [],
        url: PREDEFINED_PAGES.WELCOME,
      })
      nextTabs.selected = TAB_LAST_ID
      return nextTabs
    }
    case TAB_UPDATE_ACTIVE: {
      const nextTabs = cloneDeep(state)
      const tab = findActiveTab(nextTabs)
      assign(tab, action.payload)
      return nextTabs
    }
    case TAB_UPDATE_URL: {
      const nextTabs = cloneDeep(state)
      const tab = findActiveTab(nextTabs)
      tab.url = action.payload.url
      return nextTabs
    }
    case TAB_SELECT: {
      const nextTabs = cloneDeep(state)
      nextTabs.selected = action.payload.selected
      return nextTabs
    }
    case TAB_REMOVE: {
      // There need to be at least one tab
      if (state.list.length < 2) return state
      const nextTabs = cloneDeep(state)
      const tabIndex = findTabIndexById(nextTabs, action.payload.tabId)
      const tab = nextTabs.list[tabIndex]
      // Remove tab from array
      nextTabs.list.splice(tabIndex, 1)
      // If removed tab is current tab
      if (tab.id === nextTabs.selected) nextTabs.selected = nextTabs.list[0].id
      return nextTabs
    }
    default:
      return state
  }
}
